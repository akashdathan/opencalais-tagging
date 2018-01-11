export declare type UnionKeyToValue<U extends string> = {
    [K in U]: K;
};
export declare type TagType = 'ENTITY' | 'SOCIALTAG' | 'INDUSTRY';
export declare const TagType: UnionKeyToValue<TagType>;
export declare type TagInfo = {
    tag: string;
    entityType?: string;
    type: TagType;
    relevance: number;
};
export declare type TopicInfo = {
    label: string;
    score: number;
};
