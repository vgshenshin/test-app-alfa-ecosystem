import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6650afa2ec9b4a4a60330208.mockapi.io/api/v1/characters',
    }),
    tagTypes: ["Characters"],
    endpoints: builder => ({
        getCharacters: builder.query({
            query: () => "/",
            providesTags: () => [{ type: "Characters", id: "charId" }],
        }),
        getCharById: builder.query({
            query: (id) => `/${id}`,
        }),
        setFavorite: builder.mutation({
            query: ({ id, favorite }) => {
                return {
                    url: `/${id}`,
                    method: "PUT",
                    body: { favorite },
                }
            },
            invalidatesTags: [{ type: "Characters", id: "charId" }],
        }),
    })
});

export const {
    useGetCharactersQuery,
    useGetCharByIdQuery,
    useSetFavoriteMutation,
} = apiSlice;