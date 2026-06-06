import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Recruiters.css';

interface Recruiter {
  name: string;
  short: string;
  color: string;
  bg: string;
  logo?: string;
  category: 'IT' | 'Finance' | 'Social';
}

const recruiters: Recruiter[] = [
  {
    name: 'Tata Consultancy Services',
    short: 'TCS',
    color: '#fff',
    bg: '#003087',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png',
    category: 'IT',
  },
  {
    name: 'Infosys',
    short: 'INFY',
    color: '#fff',
    bg: '#007CC3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png',
    category: 'IT',
  },
  {
    name: 'Justdial',
    short: 'JD',
    color: '#fff',
    bg: '#E8420A',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Just_dial_logo_updated.png',
    category: 'IT',
  },
  {
    name: 'HCL Technologies',
    short: 'HCL',
    color: '#fff',
    bg: '#0070C0',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/HCLTech-new-logo.svg/1280px-HCLTech-new-logo.svg.png',
    category: 'IT',
  },
  {
    name: 'Computervalley IT',
    short: 'CV',
    color: '#fff',
    bg: '#0891B2',
    logo: 'https://www.computervalleyit.com/public/images/logo.png',
    category: 'IT',
  },
  {
    name: 'Deloitte',
    short: 'DLT',
    color: '#fff',
    bg: '#86BC25',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/DeloitteNewLogo.png',
    category: 'Finance',
  },
  {
    name: 'Deloitte Touche LLP',
    short: 'DT',
    color: '#fff',
    bg: '#5B8C00',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/DeloitteNewLogo.png',
    category: 'Finance',
  },
  {
    name: 'Axis Bank',
    short: 'AXIS',
    color: '#fff',
    bg: '#97144D',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/1280px-Axis_Bank_logo.svg.png',
    category: 'Finance',
  },
  {
    name: 'Steadfast International',
    short: 'SF',
    color: '#fff',
    bg: '#1E3A5F',
    category: 'Finance',
  },
  {
    name: 'Shanthi Bhavan Academy',
    short: 'SBA',
    color: '#fff',
    bg: '#7C3AED',
    category: 'Social',
  },
  {
    name: 'Chaithaniya Institute',
    short: 'CI',
    color: '#fff',
    bg: '#DB2777',
    category: 'Social',
  },
  {
    name: 'Lissie Hospital',
    short: 'LH',
    color: '#fff',
    bg: '#059669',
    category: 'Social',
  },
  {
    name: 'Punarjjany Centre',
    short: 'PC',
    color: '#fff',
    bg: '#D97706',
    category: 'Social',
  },
];

// Duplicate for seamless infinite loop
const track = [...recruiters, ...recruiters];

function LogoCard({ r }: { r: Recruiter }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rc-card">
      <div className="rc-logo-wrap">
        {r.logo && !imgError ? (
          <img
            src={r.logo}
            alt={r.name}
            className="rc-logo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="rc-logo-fallback" style={{ background: r.bg, color: r.color }}>
            {r.short}
          </div>
        )}
      </div>
      <span className="rc-name">{r.name}</span>
    </div>
  );
}

export default function Recruiters() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="rc-section section section-white" id="recruiters" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-tag">Industry Connect</p>
          <h2 className="section-title">Our Recruiters</h2>
          <p className="section-subtitle">
            Leading IT firms, global financial institutions, and social organisations
            that trust JPM College graduates for their talent and dedication.
          </p>
        </motion.div>
      </div>

      {/* Marquee — full bleed */}
      <motion.div
        className="rc-marquee-wrap"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className="rc-track-outer rc-fade">
          <div className="rc-track rc-track--left">
            {track.map((r, i) => <LogoCard key={i} r={r} />)}
          </div>
        </div>
      </motion.div>

      {/* Legend */}
      <div className="container">
        <motion.div
          className="rc-legend"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rc-legend-item">
            <span className="rc-legend-dot" style={{ background: '#007CC3' }} />
            <span>IT & Technology</span>
          </div>
          <div className="rc-legend-item">
            <span className="rc-legend-dot" style={{ background: '#86BC25' }} />
            <span>Finance & Banking</span>
          </div>
          <div className="rc-legend-item">
            <span className="rc-legend-dot" style={{ background: '#7C3AED' }} />
            <span>Healthcare & Social</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
