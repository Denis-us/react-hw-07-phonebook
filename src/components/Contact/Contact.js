import { toast } from 'react-toastify';
import { useDeleteContactMutation} from '../../redux/reduxSlice'
import s from './Contact.module.css'

const Contact = ({id, name, number}) => {

    const [deleteContact, {isLoading}] = useDeleteContactMutation()
  
    return (
        <div className={s.contact}>
          <div className={s.contactInfo}>
            <p className={s.contactsData}>{name}</p>
            <p className={s.contactsData}>{number}</p>
          </div>
          
            
            <button
              className={s.btn}
              type="button"
              disabled={isLoading}
              onClick={() => {
                deleteContact(id)
                toast.success('Контакт удален')
              }}
            >
              Удалить
            </button>
        </div>     
    );
  };
  
  export default Contact