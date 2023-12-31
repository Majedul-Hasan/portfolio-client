/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token =
      getState()?.auth?.accessToken ||
      localStorage.getItem('school-access-token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
