import axios from 'axios'

axios.defaults.baseURL = 'https://6280c5027532b4920f7370f8.mockapi.io/contacts'

export async function getContactsAPI() {
    const {data} = await axios.get('/contacts')
    console.log(data)
    return data
}

export async function postContactAPI(contact) {
    const {data} = await axios.post('/contacts')
    console.log('data', data)
    console.log('contact', contact)
    return contact
}

export async function deleteContactAPI(id) {
    const {data} = await axios.delete(`/contacts/${id}`)
    console.log('data', data)
    console.log('id', id)
    return id
}