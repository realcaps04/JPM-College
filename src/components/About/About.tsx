import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './About.css';

const highlights = [
  'NAAC Accredited — Grade B++',
  '25+ Years of Academic Excellence',
  'Affiliated to Mahatma Gandhi University',
  'State-of-the-art Laboratories & Library',
  'Strong Alumni Network & Industry Ties',
  '95% Graduate Placement Record',
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section className="about section section-white" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about__img-wrap">
              <img src="/images/about_library.png" alt="College Library" className="about__img" />
              <div className="about__img-badge">
                <span className="about__img-badge-num">25</span>
                <span className="about__img-badge-text">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="section-tag">About Us</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
              A Legacy of Knowledge<br />& Academic Excellence
            </h2>
            <div className="divider divider-left" style={{ marginBottom: '24px' }} />
            <p className="about__para">
              Founded in 1999 and affiliated to Mahatma Gandhi University, JPM Arts & Science
              College has emerged as one of the leading institutions of higher education in Kerala.
              Accredited by NAAC with Grade B++, we offer a rich academic environment that blends
              traditional values with modern educational practices.
            </p>
            <p className="about__para">
              With 18 departments, 120+ expert faculty and a thriving student community of over
              3,500, we are committed to shaping graduates who are academically accomplished,
              ethically grounded and professionally ready.
            </p>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <div className="about__highlight" key={i}>
                  <CheckCircle size={15} color="#004b80" strokeWidth={2.5} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Programs <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
