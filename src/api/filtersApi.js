import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from './params';

const filtersApi = createApi({
	reducerPath: 'filtersApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${url}/filters` }),
	endpoints: builder => ({
		getFilters: builder.query({
			query: () => '',
		}),
	}),
});

export const { reducerPath, reducer, middleware, useGetFiltersQuery } =
	filtersApi;
