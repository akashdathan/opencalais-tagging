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
class OpencalaisTagging {
    static tag(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.accessToken)
                throw (new Error(`accessToken not provided`));
            if (!options.content)
                throw (new Error(`content not provided`));
            const content = options.content, accessToken = options.accessToken;
            const headers = {
                "Content-Type": "text/raw",
                "OutputFormat": "application/json",
                "omitOutputtingOriginalText": true,
                "X-AG-Access-Token": accessToken,
                "Content-Length": Buffer.byteLength(content, 'utf8')
            };
            delete options.content;
            delete options.accessToken;
            for (let key in options)
                headers[key] = options[key];
            const calaisOptions = utils_1.getCalaisOptions(headers);
            try {
                const calaisResp = yield utils_1.executeHttps(calaisOptions, content);
                if (headers.OutputFormat === "application/json") {
                    try {
                        JSON.parse(calaisResp);
                    }
                    catch (e) {
                        throw (calaisResp);
                    }
                    if (callback)
                        callback(undefined, JSON.parse(calaisResp));
                    else
                        return JSON.parse(calaisResp);
                }
                else {
                    if (callback)
                        callback(undefined, calaisResp);
                    else
                        return calaisResp;
                }
            }
            catch (error) {
                if (callback)
                    callback(error, undefined);
                else
                    throw (error);
            }
        });
    }
}
exports.OpencalaisTagging = OpencalaisTagging;
//# sourceMappingURL=calais-tagging.js.map