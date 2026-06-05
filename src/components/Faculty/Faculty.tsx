import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faculty } from '../../data/siteData';
import './Faculty.css';

export default function Faculty() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="faculty section section-white" id="faculty" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Our Educators</div>
          <h2 className="section-title">Distinguished Faculty</h2>
          <p className="section-subtitle">Experienced academics, researchers and mentors dedicated to your growth and success.</p>
        </motion.div>

        <div className="faculty__grid">
          {faculty.map((m, i) => (
            <motion.div key={m.id} className="faculty__card card" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="faculty__img-wrap">
                <img src={m.image} alt={m.name} className="faculty__img" />
                <div className="faculty__exp">{m.experience}</div>
              </div>
              <div className="faculty__body">
                <h3 className="faculty__name">{m.name}</h3>
                <div className="faculty__designation">{m.designation}</div>
                <div className="faculty__dept">{m.department}</div>
                <div className="faculty__divider" />
                <div className="faculty__spec">
                  <span className="faculty__spec-label">Specialization:</span> {m.specialization}
                </div>
                <div className="faculty__qual">{m.qualification}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn btn-primary">View Full Faculty Directory</button>
        </div>
      </div>
    </section>
  );
}
