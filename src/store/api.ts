import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { makeNewsBlocks } from "../components/utils/newsFunctions";
import { INew } from "../types/news";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchMonthlyNews: builder.query({
            query: ({year, month}) => `/news?year=${year}&month=${month}`,
            merge: (currentCache, newItems) => {
                return {...currentCache, ...newItems};
            },
            serializeQueryArgs: ({endpointName}) => endpointName,
            transformResponse: (response: INew[]) => makeNewsBlocks(response),
        }),
    }),
});

export const {useFetchMonthlyNewsQuery} = newsApi;