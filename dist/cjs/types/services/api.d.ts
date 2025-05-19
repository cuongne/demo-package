import { SuggestedType } from '../types';
export interface SearchResponse {
    items: unknown[];
    total: number;
}
export declare const checkLogin: {
    get: () => Promise<any>;
};
export declare const searchApi: {
    search: (query: string) => Promise<SearchResponse>;
};
export declare const getCategories: {
    get: () => Promise<any>;
};
export declare const getSuggestedKeywords: {
    get: (keyword: string) => Promise<SuggestedType[]>;
};
