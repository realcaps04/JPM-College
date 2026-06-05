import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { admissionSteps } from '../../data/siteData';
import './Admissions.css';

export default function Admissions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="admissions section section-blue" id="admissions" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">How to Apply</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Admissions Process</h2>
          <p className="section-subtitle">Follow these five steps to begin your journey at JPM Arts &amp; Science College.</p>
        </motion.div>

        <div className="admissions__steps">
          {admissionSteps.map((s, i) => (
            <motion.div key={i} className="admissions__step" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="admissions__step-num">{s.step}</div>
              <div className="admissions__step-icon">{s.icon}</div>
              <h3 className="admissions__step-title">{s.title}</h3>
              <p className="admissions__step-desc">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="admissions__cta-box" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
          <div className="admissions__cta-text">
            <h3>Admissions Open for 2026–27</h3>
            <p>Limited seats. Apply now to secure your place.</p>
          </div>
          <div className="admissions__cta-btns">
            <button className="btn btn-gold">Apply Online Now</button>
            <button className="btn btn-outline-white">Download Prospectus</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
