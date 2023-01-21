import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import shortid from "shortid";
import { useState,useRef,useEffect } from "react";


export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ??
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number
    };
    

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    }
    else {
      setContacts(
        [newContact, ...contacts]
      );
    };
  };


    const changeFilter = event => {
      setFilter(event.currentTarget.value)
  };
  
    
    const deleteContact = (contactId) => {
      setContacts(
        contacts.filter(contact => contact.id !== contactId),
      )
  };
  
      
    const visibleContact = () => {
      const nomalizedFilter = filter.toLowerCase();

      return contacts.filter(contacts => contacts.name.toLowerCase().includes(nomalizedFilter))
    }

  
    return (
      <>
          <Section title="Phonebook">
            <ContactForm onSubmit={addContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={filter} onChange={changeFilter} />
            <ContactList listContacts={visibleContact()} onDelete={deleteContact} />
        </Section>
        
         <GlobalStyle />
      </>
    )
  }

