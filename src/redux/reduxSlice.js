import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6280c5027532b4920f7370f8.mockapi.io/contacts' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts']
      }),

      addContact: builder.mutation({
          query: values => ({
              url: '/contacts',
              method: 'POST',
              body: values
          }),
          invalidatesTags: ['Contacts'],
      }),

      deleteContact: builder.mutation({
        query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],

    }),
    }),
  })

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {filter: ''},
    reducers: {
        changeFilter(state, {payload}) {state.filter = payload}
    }
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi
export const {changeFilter} = filterSlice.actions