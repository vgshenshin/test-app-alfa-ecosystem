import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6650afa2ec9b4a4a60330208.mockapi.io/api/v1/characters',
    }),
    endpoints: builder => ({
        getCharacters: builder.query({
            query: () => "/",
        }),
        getCharById: builder.query({
            query: (id) => `/${id}`,
        }),
    })
});

export const {
    useGetCharactersQuery,
    useGetCharByIdQuery,
} = apiSlice;