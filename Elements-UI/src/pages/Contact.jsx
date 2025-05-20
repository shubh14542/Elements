import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#e0e0e0',
        fontFamily: "'Orbitron', 'Segoe UI', sans-serif",
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          color: '#00e5ff',
          textShadow: '0 0 10px #00e5ff',
          fontWeight: '900',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Get in Touch
      </h1>

      <p
        style={{
          maxWidth: '700px',
          fontSize: '1.3rem',
          lineHeight: 1.7,
          marginBottom: '3rem',
          color: '#b0d6f7',
        }}
      >
        Have questions or want to book a gaming session? Reach out to Elements’ team.
        We’re here to help level up your gaming experience.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#121212',
          padding: '2rem',
          borderRadius: '14px',
          boxShadow: '0 0 15px #00e5ff66',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00e5ff', fontWeight: '700' }}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your gamer tag or real name"
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            backgroundColor: '#222',
            color: '#eee',
          }}
        />

        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00e5ff', fontWeight: '700' }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            backgroundColor: '#222',
            color: '#eee',
          }}
        />

        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00e5ff', fontWeight: '700' }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="What’s up? Tell us your query or feedback."
          rows={5}
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            backgroundColor: '#222',
            color: '#eee',
            resize: 'vertical',
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#00e5ff',
            color: '#000',
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            width: '100%',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00b8cc')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00e5ff')}
        >
          Send Message
        </button>
      </form>

      <div
        style={{
          marginTop: '3rem',
          maxWidth: '500px',
          color: '#b0d6f7',
          fontSize: '1rem',
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        <p>
          <strong>Email:</strong> support@elementsgaming.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Address:</strong> 123 Gaming St, Pixel City, GameWorld
        </p>
      </div>
    </div>
  );
};

export default Contact;
