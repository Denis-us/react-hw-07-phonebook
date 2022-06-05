import {configureStore} from '@reduxjs/toolkit'
import { contactsSlice, filterSlice } from './reduxSlice'


const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    },

})

export default store