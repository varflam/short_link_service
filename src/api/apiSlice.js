import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://79.143.31.216',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
            return headers
          }
    }),
    endpoints: builder => ({
        loginUser: builder.mutation({
            query: user => ({
                url: '/login',
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }),
        setUser: builder.mutation({
            query: ({password, username})=> ({
                url: `/register`,
                params: {username, password},
                method: 'POST'
            })
        }),
        squeezeLink: builder.mutation({
            query: link => ({
                url: `/squeeze`,
                params: {link},
                method: 'POST',
            })
        }),
        getStatistics: builder.query({
            query: ({order, offset = 0, limit = 0}) => ({
                url: '/statistics',
                params: {
                    order,
                    offset,
                    limit
                },
                method: 'GET'
            })
        })
        
    })
});

export const { useLoginUserMutation, useSetUserMutation, useSqueezeLinkMutation, useGetStatisticsQuery } = userApiSlice;

