import { useSelector } from 'react-redux';
import { Contact } from '../contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
//import css from './TaskList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className="list">
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
