import { SuggestedType } from '../types';
import axiosInstance from '../utils/axios';

export interface SearchResponse {
  // Define your response type
  items: unknown[];
  total: number;
}

export const checkLogin = {
  get: async () => {
    const response = await axiosInstance.get('users/profile');
    return response.data;
  },
};
export const searchApi = {
  search: async (query: string): Promise<SearchResponse> => {
    const response = await axiosInstance.get(
      `/search?q=${encodeURIComponent(query)}`,
    );
    return response.data;
  },
};

export const getCategories = {
  get: async () => {
    const response = await axiosInstance.get(
      `job-categories/job-category-with-all-type`,
    );
    return response.data;
  },
};

export const getSuggestedKeywords = {
  get: async (keyword: string): Promise<SuggestedType[]> => {
    try {
      const response = await axiosInstance.get(
        `/suggested-units/?keyword=${encodeURIComponent(keyword)}`,
      );
      const data = response.data;
      return data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Cannot get suggested keywords!');
    }
  },
};
