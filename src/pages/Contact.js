import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!name || !email || !subject || !message) {
      setError("Please fill in all the fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (message.length < 10) {
      setError("The message must be at least 10 characters.");
      return;
    }

    setError("");
    setSuccess(`Thank you ${name}, we received your message!`);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className="page-header center">
        <h1>Contact Us</h1>
        <p className="muted">Questions or ideas? Send us a message.</p>
      </div>

      <div className="two-columns">
        <div className="box contact-info">
          <h2>Get in touch</h2>
          <p>📍 Beirut, Lebanon</p>
          <p>📧 support@healthtrack.com</p>
          <p>📞 +961 1 234 567</p>
          <p>🕘 Monday – Friday, 9:00 – 17:00</p>
        </div>

        <form className="box" onSubmit={handleSubmit}>
          <label htmlFor="cname">Full Name</label>
          <input id="cname" placeholder="Your name" value={name}
            onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="you@example.com" value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="subject">Subject</label>
          <input id="subject" placeholder="What is it about?" value={subject}
            onChange={(e) => setSubject(e.target.value)} />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." value={message}
            onChange={(e) => setMessage(e.target.value)} />

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <div className="buttons">
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
