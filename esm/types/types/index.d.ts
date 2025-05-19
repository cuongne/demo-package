export interface SuggestedType {
    id: number;
    taxonomy: string;
    keyword: string;
    url: string;
    image: null;
    slug: string;
}
export type Lang = 'vi' | 'en';
export interface Role {
    id: number;
    description: string | null;
    type: 'role';
    sort_order: number;
    name: string;
    is_active: boolean;
}
export interface Category {
    id: number;
    description: string | null;
    type: 'category';
    sort_order: number;
    name: string;
    roles: Role[];
}
