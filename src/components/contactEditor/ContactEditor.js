import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';
//import css from './TaskEditor.module.css';

export const ContactEditor = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;
    const duplicate = contacts.items.find(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );
    if (duplicate) {
      Notiflix.Notify.warning('Contact already exists!');
    } else {
      dispatch(addContact(contactName, contactNumber));
    }
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          {' '}
          Name
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number" className="label">
          {' '}
          Number
          <input
            autoComplete="off"
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="button">
          {' '}
          Add contact{' '}
        </button>
      </form>
    </>
  );
};
