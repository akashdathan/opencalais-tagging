"use strict";
/*------------------------------------------------------------------------------
   About      : Opencalais Tagging
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const Types = require("./types");
class OpencalaisTagging {
    static tag(pageContent, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const calaisOptions = {
                "host": "api.thomsonreuters.com",
                "port": "443",
                "path": "/permid/calais",
                "method": "POST",
                "headers": {
                    "Content-Type": "text/raw",
                    "OutputFormat": "application/json",
                    "X-AG-Access-Token": accessToken,
                    "Content-Length": Buffer.byteLength(pageContent, 'utf8'),
                    "omitOutputtingOriginalText": true
                }
            };
            try {
                const calaisResp = yield utils_1.executeHttps(calaisOptions, pageContent);
                try {
                    JSON.parse(calaisResp);
                }
                catch (e) {
                    throw (calaisResp);
                }
                const res = this.processOpencalaisResult(calaisResp);
                console.log(res);
            }
            catch (error) {
                throw (error);
            }
        });
    }
    static processOpencalaisResult(calaisResp) {
        const calaisJson = JSON.parse(calaisResp), typeGroups = {};
        var topics = [], tags = [], language = [];
        for (let key in calaisJson) {
            if (!key.startsWith('http'))
                continue;
            const value = calaisJson[key];
            if (value._typeGroup) {
                const groupCount = typeGroups[value._typeGroup];
                if (groupCount) {
                    typeGroups[value._typeGroup] = groupCount + 1;
                }
                else {
                    typeGroups[value._typeGroup] = 1;
                }
                this.evaluateOpenCalaisEntity(value, topics, tags, language);
            }
        }
        return { topics, tags, language: language[0] };
    }
    static evaluateOpenCalaisEntity(entity, topics, tags, language) {
        switch (entity._typeGroup) {
            case 'topics':
                const topicsObj = {
                    label: entity.name,
                    score: entity.score
                };
                topics.push(topicsObj);
                break;
            case 'language':
                language.push(entity.language.split('/').pop());
                break;
            case 'socialTag':
                const socialObj = {
                    tag: entity.name,
                    type: Types.TagType.SOCIALTAG,
                    relevance: entity.importance
                };
                utils_1.insertUnique(socialObj, tags);
                break;
            case 'entities':
                if (entity.forenduserdisplay && entity.forenduserdisplay === 'true') {
                    const entitiesObj = {
                        tag: entity.name,
                        entityType: entity._type,
                        type: Types.TagType.ENTITY,
                        relevance: entity.relevance
                    };
                    utils_1.insertUnique(entitiesObj, tags);
                }
                break;
            case 'industry':
                const entitiesObj = {
                    tag: entity.name,
                    type: Types.TagType.INDUSTRY,
                    relevance: entity.relevance
                };
                utils_1.insertUnique(entitiesObj, tags);
                break;
        }
    }
}
exports.OpencalaisTagging = OpencalaisTagging;
//# sourceMappingURL=calais-tagging.js.map