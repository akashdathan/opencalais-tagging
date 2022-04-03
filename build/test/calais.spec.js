"use strict";
/*------------------------------------------------------------------------------
   About      : Spec File for Testing.
   
   Created on : Mon Jan 22 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe("Calais Tagging", () => {
    describe("Tag", () => {
        it("JSON Response", () => __awaiter(void 0, void 0, void 0, function* () {
            const content = `For all of Musk's products and pursuits, from electric cars and space to linking human brains 
                         to computers, to a tunneling company and concerns over the rise of artificial intelligence, 
                         there is nothing quite like the Falcon Heavy, the most powerful American rocket since the 
                         Apollo-era Saturn V. With 27 engines, the rocket is three times more powerful than the 
                         workhorse Falcon 9 rocket the company has been flying since 2010. If it can launch 
                         successfully, the Pentagon wants to use it to launch national security satellites. Musk has 
                         said he plans to use it to fly cargo to Mars and an undisclosed couple of people in a tourist 
                         jaunt around the moon.`;
            const accessToken = `ym2rpqymeSW7hyVYX5n61R4kJP0J5sa4`;
            const result = yield index_1.tag({ content, accessToken });
            chai_1.should().exist(result);
        }));
    });
});
//# sourceMappingURL=calais.spec.js.map