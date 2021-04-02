import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const removeContact = id => dispatch(actions.contactDelete(id));

  return (
    <ul className={s.listItems}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
           {name}: {number}
          <button onClick={() => removeContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
