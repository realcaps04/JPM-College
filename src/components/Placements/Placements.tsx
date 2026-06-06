import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Placements.css';

interface PlacementItem {
  name: string;
  company: string;
  position: string;
  category: 'IT' | 'Social Work' | 'International';
}

const placements: PlacementItem[] = [
  // IT
  { name: 'Jerin T Reji',         company: 'Tata Consultancy Services', position: 'Software Engineer',           category: 'IT' },
  { name: 'Anoop K Murali',        company: 'Deloitte',                  position: 'IT / Finance Analyst',        category: 'IT' },
  { name: 'Daris Mathew',          company: 'Infosys',                   position: 'Software Engineer',           category: 'IT' },
  { name: 'Sreejith P Jayakumar',  company: 'Infosys',                   position: 'Software Engineer',           category: 'IT' },
  { name: 'Jinitt Maria George',   company: 'Computervalley IT Solutions',position: 'Thodupuzha',                  category: 'IT' },
  { name: 'Antony George',         company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Saron Thomas',          company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Josvin Reji',           company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Gills Jose',            company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Chenson Kuriakose',     company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Jagan Vinod',           company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Joel Jose',             company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  { name: 'Jebin C Varghese',      company: 'Justdial',                  position: 'Technology',                  category: 'IT' },
  // Social Work
  { name: 'Jinsu Kurien',          company: 'Shanthi Bhavan Academy',    position: 'Residential Social Worker, Kochi',      category: 'Social Work' },
  { name: 'Aparna K P',            company: 'Chaithaniya Institute',      position: 'Psychiatric Social Worker, Pune',       category: 'Social Work' },
  { name: 'Jomol P B',             company: 'Lissie Hospital',            position: 'Patient Relation Executive, Ernakulam', category: 'Social Work' },
  { name: 'Dion David',            company: 'Punarjjany De-Addiction Centre', position: 'Social Worker, Thrissur',           category: 'Social Work' },
  // International
  { name: 'Ajitt Maria Abhraham',  company: 'Steadfast International',   position: 'Bahrain',                     category: 'International' },
  { name: 'Joice John',            company: 'Steadfast International',    position: 'Bahrain',                     category: 'International' },
];

type FilterTab = 'All' | 'IT' | 'Social Work' | 'International';

const tabs: FilterTab[] = ['All', 'IT', 'Social Work', 'International'];

const catConfig = {
  IT: {
    gradient: 'linear-gradient(135deg, #2563EB, #1E40AF)',
    lightBg: '#EFF6FF',
    textColor: '#1D4ED8',
    borderColor: '#BFDBFE',
    pillBg: '#DBEAFE',
    pillText: '#1E40AF',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  'Social Work': {
    gradient: 'linear-gradient(135deg, #DB2777, #9D174D)',
    lightBg: '#FDF2F8',
    textColor: '#BE185D',
    borderColor: '#FBCFE8',
    pillBg: '#FCE7F3',
    pillText: '#9D174D',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  International: {
    gradient: 'linear-gradient(135deg, #059669, #065F46)',
    lightBg: '#F0FDF4',
    textColor: '#047857',
    borderColor: '#BBF7D0',
    pillBg: '#D1FAE5',
    pillText: '#065F46',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
};

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

export default function Placements() {
  const [filter, setFilter] = useState<FilterTab>('All');
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  const filtered = filter === 'All' ? placements : placements.filter(p => p.category === filter);

  const tabCount = (tab: FilterTab) =>
    tab === 'All' ? placements.length : placements.filter(p => p.category === tab).length;

  return (
    <section className="pl-section section section-gray" id="placements" ref={ref}>
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-tag">Career Success</p>
          <h2 className="section-title">Student Placements</h2>
          <p className="section-subtitle">
            Our graduates are making their mark across IT, healthcare, social welfare,
            and international organisations — a proud reflection of JPM College's excellence.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          className="pl-stats-row"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {[
            { num: placements.length,                                             label: 'Total Placed',   color: '#004b80' },
            { num: placements.filter(p => p.category === 'IT').length,            label: 'IT Sector',      color: '#2563EB' },
            { num: placements.filter(p => p.category === 'Social Work').length,   label: 'Social Work',    color: '#DB2777' },
            { num: placements.filter(p => p.category === 'International').length, label: 'International',  color: '#059669' },
          ].map((s) => (
            <div key={s.label} className="pl-stat-card" style={{ '--accent': s.color } as React.CSSProperties}>
              <span className="pl-stat-num">{s.num}</span>
              <span className="pl-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          className="pl-tabs"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.22 }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`pl-tab${filter === tab ? ' pl-tab--active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab !== 'All' && catConfig[tab].icon}
              <span>{tab === 'All' ? 'All Placements' : tab}</span>
              <span className="pl-tab-count">{tabCount(tab)}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="pl-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            {filtered.map((p, i) => {
              const cfg = catConfig[p.category];
              return (
                <motion.div
                  key={`${p.name}-${i}`}
                  className="pl-card"
                  style={{ '--cat-border': cfg.borderColor } as React.CSSProperties}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  {/* Card top band */}
                  <div className="pl-card-band" style={{ background: cfg.gradient }} />

                  {/* Avatar */}
                  <div className="pl-avatar" style={{ background: cfg.gradient }}>
                    {getInitials(p.name)}
                  </div>

                  {/* Info */}
                  <div className="pl-card-body">
                    <p className="pl-student-name">{p.name}</p>

                    {/* Company row */}
                    <div className="pl-company-row">
                      <div className="pl-company-icon" style={{ background: cfg.lightBg, color: cfg.textColor }}>
                        {cfg.icon}
                      </div>
                      <div>
                        <p className="pl-company-name">{p.company}</p>
                        <p className="pl-position">{p.position}</p>
                      </div>
                    </div>

                    {/* Category pill */}
                    <span
                      className="pl-cat-pill"
                      style={{ background: cfg.pillBg, color: cfg.pillText, borderColor: cfg.borderColor }}
                    >
                      {cfg.icon}
                      {p.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
