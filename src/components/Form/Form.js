import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import {useAddContactMutation} from '../../redux/reduxSlice'
import s from "./Form.module.css";


const Form = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [addContact] = useAddContactMutation()
  
  const handleAddContact = async values => {
    try {
      await addContact(values)
      toast.success('Контакт добавлен')
    } catch (error) {
      toast.error('Ошибка при добавлении контакта')
      console.log(error)
    }
  }

    return (
      <form onSubmit={handleSubmit(handleAddContact)} className={s.form}>
        <div className={s.blockForm}>
        <label className={s.label}>Имя</label>
        <input className={s.input} {...register("name", {
          required: true,
          pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        })} 
          type = "text"
          placeholder = "Введите имя"/>
          </div>
      {errors.name?.type === 'required' && <p>Имя может состоять только из букв, апострофа, тире и пробелов</p>}
        

        <div className={s.blockForm}>
        <label className={s.label}>Телефон</label>
      <input className={s.input} {...register("number", {
        required: true,
        pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
      })}
        type = "tel"
        placeholder = "Введите номер телефона" />
        </div>
      {errors.number && <p className={s.error}>Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +</p>}
        
      
      <button className={s.button} type="submit">Отправить</button>
      </form>
        
    )
  }

export default Form
