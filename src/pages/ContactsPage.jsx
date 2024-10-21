import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contacts/selectors.js";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactForm />
      <br></br>
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactsPage;