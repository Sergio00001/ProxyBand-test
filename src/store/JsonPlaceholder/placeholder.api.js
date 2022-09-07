import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'JSON/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        users: build.query({
            query: () => ({
                url: `users`
            })
        }),
        posts: build.query({
            query: (id) => ({
                url: `users/${id}/posts`
            })
        }),
        albums: build.query({
            query: (id) => ({
                url: `users/${id}/albums`
            })
        })
    })
})

export const { useUsersQuery, usePostsQuery, useAlbumsQuery } = usersApi