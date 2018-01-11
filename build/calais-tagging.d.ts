import * as Types from './types';
export declare class OpencalaisTagging {
    static tag(pageContent: string, accessToken: string, callback?: Types.callback): Promise<{
        topics: Types.TopicInfo[];
        tags: Types.TagInfo[];
        language: string;
    } | undefined>;
    static processOpencalaisResult(calaisResp: string): {
        topics: Types.TopicInfo[];
        tags: Types.TagInfo[];
        language: string;
    };
    static evaluateOpenCalaisEntity(entity: any, topics: Types.TopicInfo[], tags: Types.TagInfo[], language: string[]): void;
}
