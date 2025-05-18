import { useState } from 'react';
import '../css/EmailForm.css';

export function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section className="email-section">
      <h2>Kontaktujte nás</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Vaše jméno"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Váš e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Vaše zpráva"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Odeslat</button>
        {submitted && <p className="success-msg">Děkujeme za zprávu! Ozveme se co nejdříve.</p>}
      </form>
    </section>
  );
}
