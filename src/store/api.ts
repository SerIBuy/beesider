import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { makeNewsBlocks } from "../utils/utils-functions";


export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchMonthlyNews: builder.query({
            query: ({year, month}) => `/news?year=${year}&month=${month}`,
            transformResponse: (response) => {
                return makeNewsBlocks(response);
            }
        }),
    }),
});

export const {useFetchMonthlyNewsQuery} = newsApi;

// serializeQueryArgs: ({endpointName}) => endpointName,
            // merge: (currentCache, newItems) => {
            //     return {...currentCache, ...newItems}
            // },
            // forceRefetch({currentArg, previousArg}) {
            //     return currentArg?.year !== previousArg?.year || currentArg?.month !== previousArg?.month;
            // },