import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from './params';
import { nanoid } from '@reduxjs/toolkit';

const heroesApi = createApi({
	reducerPath: 'heroesApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${url}/heroes` }),
	tagTypes: ['Heroes'],
	endpoints: builder => ({
		getHeroes: builder.query({
			query: () => '',
			providesTags: ['Heroes'],
		}),
		createHero: builder.mutation({
			query: hero => ({
				url: '',
				method: 'POST',
				body: {
					id: nanoid(),
					...hero,
				},
			}),
			invalidatesTags: ['Heroes'],
		}),
		deleteHero: builder.mutation({
			query: id => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Heroes'],
		}),
	}),
});

export const {
	useGetHeroesQuery,
	useDeleteHeroMutation,
	useCreateHeroMutation,
	reducerPath,
	reducer,
	middleware,
} = heroesApi;
