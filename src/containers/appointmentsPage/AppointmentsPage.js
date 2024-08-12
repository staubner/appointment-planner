import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, createAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function reset() {
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    createAppointment(title, contact, date, time)
    reset();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title} contact={contact} date={date} time={time}
          setTitle={setTitle} setContact={setContact} setDate={setDate} setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments}/>
      </section>
    </div>
  );
};