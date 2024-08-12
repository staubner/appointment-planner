import React from "react";
import { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name)
  }, [contacts])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          id='title' 
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="date">Date</label>
        <input 
          id='date' 
          name='date'
          value={date} 
          min={getTodayString()} 
          type="date"
          onChange={(e) => {setDate(e.target.value)}} />
        <label htmlFor="time">Time</label>
        <input 
          id='time' 
          name="time"
          value={time} 
          type='time'
          onChange={(e) => {setTime(e.target.value)}} />
        <ContactPicker 
          value={contact}
          name='contact'
          contacts={contactNames} 
          setContact={setContact}
          onChange={(e) => {setContact(e.target.value)}} />
          <input type='submit'/>
      </form>
    </>
  );
};
