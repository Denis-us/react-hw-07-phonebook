import { useSelector, useDispatch } from "react-redux";
import {deleteContact} from '../../redux/reduxSlice'
import s from "./ContactsList.module.css";


  const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter.filter)

  const dispatch = useDispatch()

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact => (
    contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <ul className={s.contactsList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsElement}>
          <p className={s.contactsData}>
            {name}: {number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList