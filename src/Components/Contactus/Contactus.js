import React, { useState } from 'react';
import './Contact.css';

const Contactus = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleReasonChange = (e) => setReason(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Clear input fields
  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setEmail('');
    setReason('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h2>Get in Touch with Us Today – We're Here to Help!</h2>
      <p>
        At Exotic Veda, your satisfaction is our top priority. Whether you have a
        question about our products, need assistance with an order, or just want to
        share your feedback, we’re here to help. Please fill out the form below, and
        one of our team members will get back to you as soon as possible. We look
        forward to hearing from you and assisting with anything you need!
      </p>
      <p className="catering_test">Address-1001 S MAIN ST STE 500 KALISPELL, MT 59901</p>
      <form>
        <input onChange={handleNameChange} value={name} placeholder="Name" />
        <input onChange={handlePhoneChange} value={phone} placeholder="Phone Number" type="tel" />
        <input onChange={handleEmailChange} value={email} placeholder="Email" type="email" />
        <input onChange={handleReasonChange} value={reason} placeholder="Reason for Contact" />
        <textarea onChange={handleMessageChange} value={message} placeholder="Message for Us" />
        <div className="button">
          <button className='btn'><span>SEND MESSAGE</span></button>
          <button onClick={handleClear} className='btn'><span>CLEAR MESSAGE</span></button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;