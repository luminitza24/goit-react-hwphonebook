import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import './Contact.css';

export const Contact = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className="wrapper">
      <p className="text">{text}</p>
      <button type="button" className="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
