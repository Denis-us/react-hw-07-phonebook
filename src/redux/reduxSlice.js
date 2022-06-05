import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid' 

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: []},
    reducers: {
        addContact: {
            reducer: (state, {payload}) => {state.contacts.push(payload)},
            prepare: ({name, number}) => {
                const id = uuidv4()
                return {payload: {id, name, number}}
            }
        },
        deleteContact(state, {payload}) {state.contacts = state.contacts.filter(({id}) => id !== payload)}
    }
})

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {filter: ''},
    reducers: {
        changeFilter(state, {payload}) {state.filter = payload}
    }
})

export const {addContact, deleteContact} = contactsSlice.actions
export const {changeFilter} = filterSlice.actions