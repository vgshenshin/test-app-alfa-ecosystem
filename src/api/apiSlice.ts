import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: builder => ({
        getCharacters: builder.query({
            query: () => "/characters",
        }),
    })
});

export const {
    useGetCharactersQuery
} = apiSlice;