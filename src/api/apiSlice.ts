import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IChar } from "../shared/interfaces/character.interface";

type TCharactersResp = IChar[];

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6650afa2ec9b4a4a60330208.mockapi.io/api/v1/characters',
    }),
    tagTypes: ["Characters"],
    endpoints: builder => ({
        getCharacters: builder.query<TCharactersResp, void>({
            query: () => "/",
            providesTags: () => [{ type: "Characters", id: "charId" }],
        }),
        getCharById: builder.query<IChar, string>({
            query: (id) => `/${id}`,
        }),
        setFavorite: builder.mutation<IChar, { id: string; favorite: boolean }>({
            query: ({ id, favorite }) => {
                return {
                    url: `/${id}`,
                    method: "PUT",
                    body: { favorite },
                }
            },
            invalidatesTags: [{ type: "Characters", id: "charId" }],
        }),
        deleteChar: builder.mutation<IChar, string>({
            query: (id) => {
                return {
                    url: `/${id}`,
                    method: "DELETE",
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
    useDeleteCharMutation
} = apiSlice;