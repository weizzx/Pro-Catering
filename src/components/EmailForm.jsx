import emailjs from '@emailjs/browser';
import { useRef, useEffect, useState } from 'react';
import '../css/EmailForm.css';

export function EmailForm({ message }) {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' || message,
  });

  useEffect(() => {
  setFormData((prevData) => ({
    ...prevData,
    message: '' || message
  }));
  }, [message]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v9rlv4q',
        'template_544sy1f',
        formRef.current,
        '-PcfJFMtlq3KAdvso'
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Email send error:', error);
        }
      );
  };

  return (
    <section className="email-section">
      <h2>Neváhejte nás oslovit!</h2>
      <h2>Věříme, že budete spokojeni...</h2>
      <form ref={formRef} className="email-form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="Vaše jméno"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="email"
          type="email"
          name="email"
          placeholder="Váš e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="msg"
          name="message"
          placeholder="Vaše zpráva"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit">Odeslat</button>
        {submitted && <p className="success-msg">Děkujeme za zprávu! Ozveme se co nejdříve.</p>}
      </form>
    </section>
  );
}
