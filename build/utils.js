"use strict";
/*------------------------------------------------------------------------------
   About      : Utility Functions
   
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
const https = require("https");
const zlib = require("zlib");
function insertUnique(tagObj, tags) {
    let flag = true;
    for (const obj of tags) {
        if (obj.tag === tagObj.tag)
            flag = false;
    }
    if (flag) {
        tags.push(tagObj);
    }
}
exports.insertUnique = insertUnique;
function executeHttps(urlObj, inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            urlObj.agent = new https.Agent({ keepAlive: true });
            const req = https.request(urlObj, (outputStream) => {
                switch (outputStream.headers['content-encoding']) {
                    case 'gzip':
                        outputStream = outputStream.pipe(zlib.createGunzip());
                        break;
                    case 'deflate':
                        outputStream = outputStream.pipe(zlib.createInflate());
                        break;
                }
                let response = '';
                outputStream.on('data', (chunk) => {
                    response += chunk;
                });
                outputStream.on('end', () => {
                    return resolve(response);
                });
                outputStream.on('error', (err) => {
                    return reject(response);
                });
            });
            req.shouldKeepAlive = false;
            req.on('error', (err) => {
                return reject(err);
            });
            if (inputData)
                req.write(inputData);
            req.end();
        });
    });
}
exports.executeHttps = executeHttps;
//# sourceMappingURL=utils.js.map