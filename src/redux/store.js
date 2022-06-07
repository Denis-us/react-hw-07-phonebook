import {contactsApi} from './reduxSlice'
import {configureStore} from '@reduxjs/toolkit'
import { filterSlice } from './reduxSlice'


const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware],
})

export default store