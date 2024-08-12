import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useLocalStorage } from "./components/useLocalStorage/UseLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const [appointments, setAppointments] = useLocalStorage('appointments', [])

  function createContact (name, phone, email) {
    const newContact = { name, phone, email }
    setContacts(prevContacts => [...prevContacts, newContact])
  }

  function createAppointment (title, contact, date, time) {
    const newAppointment = { title, contact, date, time }
    setAppointments(prevAppointments => [...prevAppointments, newAppointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} createContact={createContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} createAppointment={createAppointment}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
