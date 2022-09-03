import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://79.143.31.216'
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
                url: `http://79.143.31.216/register?username=${username}&password=${password}`,
                method: 'POST'
            })
        }),
        squeezeLink: builder.mutation({
            query: ({link, token})=> ({
                url: `http://79.143.31.216/squeeze?link=${link}`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        })
        
    })
});

export const { useLoginUserMutation, useSetUserMutation, useSqueezeLinkMutation } = userApiSlice;

//sneeze - http://79.143.31.216/squeeze?link=http%3A%2F%2Fwww.multitran.ru%2Fc%2Fm.exe%3Fa%3D1
//redirect - http://79.143.31.216/s/C9DNH
// переходы - http://79.143.31.216/statistics?order=asc_counter&offset=0&limit=1