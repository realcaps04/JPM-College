import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { programs } from '../../data/siteData';
import './Programs.css';

const filters = ['All', 'Sciences', 'Computer Science', 'Mathematics', 'Arts', 'Commerce'];

export default function Programs() {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const filtered = active === 'All' ? programs : programs.filter(p => p.department === active);

  return (
    <section className="programs section section-gray" id="programs" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Academic Programmes</div>
          <h2 className="section-title">Undergraduate Programs</h2>
          <p className="section-subtitle">Choose from a wide range of programs across Arts, Science and Commerce — each designed for real-world success.</p>
        </motion.div>

        {/* Filters */}
        <div className="programs__filters">
          {filters.map(f => (
            <button key={f} className={`programs__filter ${active === f ? 'programs__filter--active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="programs__grid">
          {filtered.map((p, i) => (
            <motion.div key={p.id} className="programs__card card" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="programs__card-top">
                <div className="programs__icon">{p.icon}</div>
                <span className="badge badge-blue">{p.department}</span>
              </div>
              <h3 className="programs__title">{p.title}</h3>
              <p className="programs__desc">{p.description}</p>
              <div className="programs__meta">
                <span className="programs__meta-item"><Clock size={13} />{p.duration}</span>
                <span className="programs__meta-item"><Users size={13} />{p.seats} Seats</span>
              </div>
              <ul className="programs__highlights">
                {p.highlights.map((h, j) => (
                  <li key={j} className="programs__hl">✓ {h}</li>
                ))}
              </ul>
              <button className="programs__cta">View Program Details <ArrowRight size={14} /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
