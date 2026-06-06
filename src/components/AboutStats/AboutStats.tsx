import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './AboutStats.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: JSX.Element;
  color: string;
}

const statItems: StatItem[] = [
  {
    value: 100,
    suffix: '%',
    label: 'Academic Level',
    color: 'stat-blue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    value: 55,
    suffix: '',
    label: 'Staff Members',
    color: 'stat-gold',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 1120,
    suffix: '',
    label: 'Students Enrolled',
    color: 'stat-teal',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    value: 99,
    suffix: '%',
    label: 'Placement Level',
    color: 'stat-green',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
  },
];

function CountUp({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!run) return;
    let v = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      setCount(v);
      if (v >= target) clearInterval(t);
    }, 18);
    return () => clearInterval(t);
  }, [run, target]);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function AboutStats() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section className="astat-section section section-gray" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-tag">By the Numbers</p>
          <h2 className="section-title">JPM College at a Glance</h2>
          <p className="section-subtitle">
            Numbers that reflect our unwavering commitment to academic excellence,
            dedicated faculty, and student success.
          </p>
        </motion.div>

        <div className="astat-grid">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`astat-card card ${stat.color}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top decorative bar */}
              <div className="astat-bar" />

              <div className="astat-card-inner">
                {/* Icon ring */}
                <div className="astat-icon-wrap">
                  <div className="astat-icon">{stat.icon}</div>
                </div>

                {/* Value */}
                <div className="astat-value">
                  <CountUp target={stat.value} suffix={stat.suffix} run={inView} />
                </div>

                {/* Label */}
                <p className="astat-label">{stat.label}</p>

                {/* Subtle progress bar for % values */}
                {stat.suffix === '%' && (
                  <div className="astat-progress-wrap">
                    <motion.div
                      className="astat-progress-bar"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${stat.value}%` } : {}}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
