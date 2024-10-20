import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { List, ListItem } from "@mui/material";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <List className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id} className={styles.contactListItem}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;