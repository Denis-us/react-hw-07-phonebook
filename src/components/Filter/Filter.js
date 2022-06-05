import { useDispatch, useSelector } from 'react-redux'
import {changeFilter} from '../../redux/reduxSlice'
import s from "./Filter.module.css"

const Filter = () => {
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  return (
    <div className={s.filter}>
      <label className={s.label}>
      Поиск контакта по имени
      </label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  )
}

export default Filter