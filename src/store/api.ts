import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchNews: builder.query({
            query: () => '/news',
        }),
    }),
});

export const {useFetchNewsQuery} = newsApi;