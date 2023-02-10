import React from 'react';
import './Contact.css';

const Contact = () => {
  function handleOnSubmit() {}
  return (
    <div>
      <form className='form' onSubmit={handleOnSubmit}>
        <form
          id='form-input-control-email'
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <form
          id='form-input-control-last-name'
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <form
          id='form-textarea-control-opinion'
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <button type='submit' color='green'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
