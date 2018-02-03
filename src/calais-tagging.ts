/*------------------------------------------------------------------------------
   About      : Opencalais Tagging
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/

import {
        executeHttps,
        getCalaisOptions
       }                                          from './utils'
import * as Types                                 from './types'

export class OpencalaisTagging {
  
  static async tag(options : {[index : string] : any}, callback ?: Types.callback) {
    if(!options.accessToken) throw(new Error(`accessToken not provided`))
    if(!options.content)     throw(new Error(`content not provided`))

    const content     = options.content,
          accessToken = options.accessToken


    const headers : {[index : string] : any} = {
      "Content-Type"               : "text/raw",
      "OutputFormat"               : "application/json",
      "omitOutputtingOriginalText" : true,
      "X-AG-Access-Token"          : accessToken,
      "Content-Length"             : Buffer.byteLength(content, 'utf8')
    }

    delete options.content
    delete options.accessToken

    for(let key in options) 
      headers[key] = options[key]

    const calaisOptions = getCalaisOptions(headers)
    try {
      const calaisResp = await executeHttps(calaisOptions, content)

      if(headers.OutputFormat === "application/json") {
        try{JSON.parse(calaisResp)} catch(e) {throw(calaisResp)}

        if(callback) callback(undefined, JSON.parse(calaisResp))
        else return JSON.parse(calaisResp)
      } else {
        if(callback) callback(undefined, calaisResp)
        else return calaisResp
      }

    } catch(error) {
      if(callback) callback(error, undefined)
      else throw(error)
    }
  }
}