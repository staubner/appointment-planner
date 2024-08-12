import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={name} required
          onChange={(e) => setName(e.target.value)} />
        <label htmlFor='phone'>Phone</label>
        <input id='phone' type='text' value={phone} required placeholder="e.g. 123-456-7890"
          onChange={(e) => setPhone(e.target.value)}
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' value={email} required
          onChange={(e) => setEmail(e.target.value)} />
        <input type='submit' />
      </form>
    </>
  );
};

