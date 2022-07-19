import ContactListItem from '../ContactListItem'

import styles from './ContactList.module.css'

const ContactList = ({ contacts, onClick }) => {
    const newContacts = [...contacts].map(({ id, name, number }, index) =>
        <ContactListItem key={id} name={name} number={number} onDelete={() => onClick(index)} />)

    return (
        <ul className={styles.list}>
            {newContacts}
        </ul>
    )
}

export default ContactList;