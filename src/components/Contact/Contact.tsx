import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Supabase insert
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section className="contact section section-white" id="contact" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Contact Us</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Our admissions office is ready to assist you with any queries about programs, fees or campus life.</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <div className="contact__info-box">
              <div className="contact__info-header">
                <h3>JPM Arts &amp; Science College</h3>
                <p>Reach out to us for admissions, programmes or any other information.</p>
              </div>
              <div className="contact__info-items">
                {[
                  { icon: <MapPin size={18} />, label: 'Address', value: 'JPM Campus, Labbakkada, Kanchiyar, Kerala – 685 511' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 98765 43210' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'admissions@jpmcollege.edu.in' },
                ].map((item, i) => (
                  <div className="contact__info-item" key={i}>
                    <div className="contact__info-icon">{item.icon}</div>
                    <div>
                      <div className="contact__info-label">{item.label}</div>
                      <div className="contact__info-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact__hours">
                <h4>Office Hours</h4>
                <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send an Enquiry</h3>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Full Name *</label>
                  <input className="contact__input" type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email Address *</label>
                  <input className="contact__input" type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Phone Number</label>
                  <input className="contact__input" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 00000 00000" />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Program of Interest</label>
                  <select className="contact__input" name="program" value={form.program} onChange={onChange}>
                    <option value="">Select program</option>
                    <option>B.Sc. Chemistry</option>
                    <option>B.Sc. Computer Science</option>
                    <option>B.Sc. Mathematics</option>
                    <option>B.A. English Literature</option>
                    <option>B.Com. (General)</option>
                    <option>B.Sc. Botany</option>
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea className="contact__input contact__textarea" name="message" value={form.message} onChange={onChange} placeholder="Write your enquiry here..." rows={4} />
              </div>
              <button className="contact__submit btn btn-primary" type="submit">
                {sent ? <><CheckCircle size={16} /> Sent Successfully</> : <><Send size={16} /> Submit Enquiry</>}
              </button>
              {sent && <p className="contact__success">✅ Thank you! We'll respond within 24 hours.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
