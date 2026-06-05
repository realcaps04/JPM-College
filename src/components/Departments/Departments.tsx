import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { departments } from '../../data/siteData';
import './Departments.css';

export default function Departments() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="depts section section-white" id="departments" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Academic Structure</div>
          <h2 className="section-title">Academic Departments</h2>
          <p className="section-subtitle">Nine centres of academic excellence, each offering specialised programmes and expert faculty.</p>
        </motion.div>
        <div className="depts__grid">
          {departments.map((d, i) => (
            <motion.div key={d.id} className="depts__card" initial={{ opacity: 0, scale: .96 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <div className="depts__icon">{d.icon}</div>
              <h3 className="depts__name">{d.name}</h3>
              <div className="depts__info">{d.programs} Programs · {d.faculty} Faculty</div>
              <div className="depts__est">Est. {d.established}</div>
              <div className="depts__bar" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
