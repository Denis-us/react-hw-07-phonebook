import { useSelector } from "react-redux";
import {useGetContactsQuery} from '../../redux/reduxSlice'
import Contact from '../Contact'
import s from "./ContactsList.module.css";


const ContactList = () => {
  const filter = useSelector(state => state.filter.filter)
  const {data: contacts} = useGetContactsQuery()

  const filteredContacts = (contacts, filter) => {
    return contacts?.filter(contact => (
    contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const filterContacts = filteredContacts(contacts, filter);


  return (
    <ul className={s.contactsList}>
      {filterContacts?.map(({ id, name, number }) => (
        <li key={id} className={s.contactsElement}>
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList