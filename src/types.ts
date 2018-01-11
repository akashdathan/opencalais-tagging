/*------------------------------------------------------------------------------
   About      : Types Used
   
   Created on : Thu Jan 11 2018
   Author     : Akash Dathan
------------------------------------------------------------------------------*/

export type UnionKeyToValue<U extends string> = {
  [K in U]: K
}

export type TagType = 'ENTITY' | 'SOCIALTAG' | 'INDUSTRY'
export const TagType : UnionKeyToValue<TagType> = {
  ENTITY          : 'ENTITY',         // Open Calais Entity 
  SOCIALTAG       : 'SOCIALTAG',      // Social Tag from Open Calais (Wikipedia)
  INDUSTRY        : 'INDUSTRY'
}

export type TagInfo = {
  tag            : string 
  entityType    ?: string     // Only for entity tag
  type           : TagType 
  relevance      : number 
}

export type TopicInfo = {
  label      : string
  score      : number
}

export interface callback {
  (error: any, data: any): any
}