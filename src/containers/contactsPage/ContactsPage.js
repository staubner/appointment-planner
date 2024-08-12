import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, createContact }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [dupe, setDupe] = useState(false)

  function reset() {
    setName('');
    setPhone('');
    setEmail('');
    setDupe(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (dupe === false) {
      createContact(name, phone, email)
      reset();
    } else {
      alert(`You already have a contact named ${name}`)
    }
    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      setDupe(true);
      alert(`You already have a contact named ${name}`)
    }
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email}
          handleSubmit={handleSubmit}
          setName={setName} setPhone={setPhone} setEmail={setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
