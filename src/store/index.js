import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './JsonPlaceholder/placeholder.api'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
})