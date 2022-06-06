import { useDeleteContactMutation} from '../../redux/reduxSlice'
import s from './Contact.module.css'

const Contact = ({id, name, number}) => {

    const [deleteContact, {isLoading}] = useDeleteContactMutation()
  
    return (
        <>
            <p className={s.contactsData}>
              {name}: {number}
            </p>
            <button
              className={s.btn}
              type="button"
              disabled={isLoading}
              onClick={() => deleteContact(id)}
            >
              Удалить
            </button>
        </>     
    );
  };
  
  export default Contact