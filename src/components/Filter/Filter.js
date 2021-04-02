// const Filter = ({ filter, onChange }) => {
//   return (
//     <input
//       type="text"
//       name="filter"
//       value={filter}
//       onChange={({ target }) => onChange(target.value)}
//       placeholder="Enter name for Search"
//     />
//   );
// };

// export default Filter;

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import actions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrapper}>
      <label htmlFor="filter-contact">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter-contact"
        placeholder="Enter name for search"
        className={s.inputFilter}
        onChange={({ target }) =>
          dispatch(actions.filterChange(target.value))
        }
        value={value}
      />
    </div>
  );
}
