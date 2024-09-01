import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
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
        className={styles.deleteButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
