import  { useState } from 'react';

export default function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const { success } = await response.json();
      if (success) {
        setStatus('Thank you for your message!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('There was a problem sending your message. Please try again later.');
      }
    };
  
    return (
        <>
        <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

      <button type="submit">Submit</button>

      <p>{status}</p>
    </form>
        </>
    )
    }