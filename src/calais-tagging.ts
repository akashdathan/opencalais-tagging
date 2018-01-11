/*------------------------------------------------------------------------------
   About      : Opencalais Tagging
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/

import {
        executeHttps,
        insertUnique
       }                                          from './utils'
import * as Types                                 from './types'

export class OpencalaisTagging {
  
  static async tag(pageContent : string, accessToken : string) {
    
    const calaisOptions = {
      "host"    : "api.thomsonreuters.com",
      "port"    : "443",
      "path"    : "/permid/calais",
      "method"  : "POST",
      "headers" : {
        "Content-Type"               : "text/raw",
        "OutputFormat"               : "application/json",
        "X-AG-Access-Token"          : accessToken,
        "Content-Length"             : Buffer.byteLength(pageContent, 'utf8'),
        "omitOutputtingOriginalText" : true
      }
    }

    try {
      const calaisResp = await executeHttps(calaisOptions, pageContent)

      try{JSON.parse(calaisResp)} catch(e) {throw(calaisResp)}

      const res = this.processOpencalaisResult(calaisResp)
      console.log(res)
    } catch(error) {
      throw(error)
    }
  }
  
  static processOpencalaisResult(calaisResp: string) {
    const calaisJson : { [index : string] : any }    = JSON.parse(calaisResp),
          typeGroups : { [index : string] : number } = {}
    
    var topics   = [] as Types.TopicInfo[],
        tags     = [] as Types.TagInfo[],
        language = [] as string[]

    for(let key in calaisJson) {
      if(!key.startsWith('http')) continue
      const value : any = calaisJson[key]

      if(value._typeGroup) {
        const groupCount = typeGroups[value._typeGroup]

        if(groupCount) {
          typeGroups[value._typeGroup] = groupCount + 1
        } else {
          typeGroups[value._typeGroup] = 1
        }
        this.evaluateOpenCalaisEntity(value, topics, tags, language)
      }
    }
    
    return {topics, tags, language : language[0]}
  }

  static evaluateOpenCalaisEntity(entity: any, topics : Types.TopicInfo[], tags : Types.TagInfo[], language : string[]) {

    switch(entity._typeGroup) {
      case 'topics':
        const topicsObj : Types.TopicInfo = {
          label    : entity.name,
          score    : entity.score
        }
        topics.push(topicsObj)
        break

      case 'language':
        language.push(entity.language.split('/').pop())
        break

      case 'socialTag':
        const socialObj = {
          tag       : entity.name,
          type      : Types.TagType.SOCIALTAG,
          relevance : entity.importance
        }
        insertUnique(socialObj, tags) 
        break

      case 'entities':
        if(entity.forenduserdisplay && entity.forenduserdisplay === 'true') {
          const entitiesObj = {
            tag        : entity.name,
            entityType : entity._type,
            type       : Types.TagType.ENTITY,
            relevance  : entity.relevance
          }
          
          insertUnique(entitiesObj, tags)
        } 
        break

      case 'industry':
        const entitiesObj = {
          tag        : entity.name,
          type       : Types.TagType.INDUSTRY,
          relevance  : entity.relevance
        }
        
        insertUnique(entitiesObj, tags)
        break
    }
  }
}