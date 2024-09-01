import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.text}>
          <FaUser className={styles.icon} />
          {contact.name}
        </p>
        <p className={styles.text}>
          <FaPhone className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
