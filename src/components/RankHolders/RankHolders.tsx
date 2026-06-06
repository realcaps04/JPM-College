import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './RankHolders.css';

export interface RankHolder {
  name: string;
  rank: string;
  programme: string;
  category: string;
}

export const rankHolders: RankHolder[] = [
  { name: 'Jeeva Mary Jose',      rank: '1st Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Sheyona Shaji',        rank: '1st Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Athira Raj',           rank: '2nd Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Soniya James',         rank: '2nd Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Albin Kurian',         rank: '3rd Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Roshna Roy',           rank: '3rd Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Jinitt Maria George',  rank: '4th / 5th Rank',programme: 'MSc Computer Science (News Notes IVth)',  category: 'PG' },
  { name: 'Lintu Joseph',         rank: '9th Rank',      programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Anju Mathew',          rank: '10th Rank',     programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Bensha B J',           rank: '10th Rank',     programme: 'MSc Computer Science',                    category: 'PG' },
  { name: 'Divyamol G',           rank: '2nd Rank',      programme: 'MCom',                                    category: 'PG' },
  { name: 'Arya M',               rank: '7th Rank',      programme: 'MSW',                                     category: 'PG' },
  { name: 'Adithya Shyjan',       rank: '1st Rank',      programme: 'BTTM',                                    category: 'UG' },
  { name: 'Bibin Thomas',         rank: '5th Rank',      programme: 'BTTM',                                    category: 'UG' },
  { name: 'Nandini T',            rank: '9th Rank',      programme: 'BTTM',                                    category: 'UG' },
  { name: 'Christeenamol Joseph', rank: '6th Rank',      programme: 'BTTM',                                    category: 'UG' },
  { name: 'Divya Kannan',         rank: '2nd Rank',      programme: 'BCom Co‑operation',                       category: 'UG' },
  { name: 'Jeneeba P',            rank: '10th Rank',     programme: 'BCom Co‑op',                              category: 'UG' },
  { name: 'Meenu Joseph',         rank: '9th Rank',      programme: 'BCom CA',                                  category: 'UG' },
  { name: 'Minni Mariya Joy',     rank: '3rd Rank',      programme: 'BCA',                                     category: 'UG' },
  { name: 'Arathi Rajendran',     rank: '8th Rank',      programme: 'BBA',                                     category: 'UG' },
  { name: 'Anumol J',             rank: '8th Rank',      programme: 'BA English Lang. & Literature (Model I)', category: 'UG' },
];

/* ── Medal SVGs ──────────────────────────────────────── */
export function getMedalMeta(rank: string): { cls: string; svg: JSX.Element } {
  const n = rank.toLowerCase();
  if (n.startsWith('1st')) return {
    cls: 'medal-gold',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="20" r="10" fill="url(#g1)" />
        <path d="M10 4h12l-2 8H12L10 4z" fill="url(#g1r)" />
        <path d="M12 4l4 8-4-3v-5z" fill="rgba(255,255,255,0.18)" />
        <text x="16" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif">1</text>
        <defs>
          <linearGradient id="g1" x1="6" y1="10" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D060" />
            <stop offset="1" stopColor="#C8880D" />
          </linearGradient>
          <linearGradient id="g1r" x1="10" y1="4" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D060" />
            <stop offset="1" stopColor="#C8880D" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  if (n.startsWith('2nd')) return {
    cls: 'medal-silver',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="20" r="10" fill="url(#g2)" />
        <path d="M10 4h12l-2 8H12L10 4z" fill="url(#g2r)" />
        <path d="M12 4l4 8-4-3v-5z" fill="rgba(255,255,255,0.18)" />
        <text x="16" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif">2</text>
        <defs>
          <linearGradient id="g2" x1="6" y1="10" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D8E3EA" />
            <stop offset="1" stopColor="#8A9FB0" />
          </linearGradient>
          <linearGradient id="g2r" x1="10" y1="4" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D8E3EA" />
            <stop offset="1" stopColor="#8A9FB0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  if (n.startsWith('3rd')) return {
    cls: 'medal-bronze',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="20" r="10" fill="url(#g3)" />
        <path d="M10 4h12l-2 8H12L10 4z" fill="url(#g3r)" />
        <path d="M12 4l4 8-4-3v-5z" fill="rgba(255,255,255,0.18)" />
        <text x="16" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif">3</text>
        <defs>
          <linearGradient id="g3" x1="6" y1="10" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8A87C" />
            <stop offset="1" stopColor="#A0622A" />
          </linearGradient>
          <linearGradient id="g3r" x1="10" y1="4" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8A87C" />
            <stop offset="1" stopColor="#A0622A" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  return {
    cls: 'medal-default',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="20" r="10" fill="url(#gd)" />
        <path d="M10 4h12l-2 8H12L10 4z" fill="url(#gdr)" />
        <path d="M12 4l4 8-4-3v-5z" fill="rgba(255,255,255,0.18)" />
        <defs>
          <linearGradient id="gd" x1="6" y1="10" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B9DC9" />
            <stop offset="1" stopColor="#004b80" />
          </linearGradient>
          <linearGradient id="gdr" x1="10" y1="4" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B9DC9" />
            <stop offset="1" stopColor="#004b80" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
}

export function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

/* ── RankCard (reusable) ─────────────────────────────── */
export function RankCard({ holder, index }: { holder: RankHolder; index: number }) {
  const { cls, svg } = getMedalMeta(holder.rank);
  return (
    <motion.div
      className={`rh-card card ${cls}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="rh-card-bar" />
      <div className="rh-card-inner">
        <div className="rh-avatar-wrap">
          <div className="rh-avatar">{getInitials(holder.name)}</div>
          <div className="rh-medal-svg">{svg}</div>
        </div>
        <div className="rh-card-info">
          <p className="rh-card-name">{holder.name}</p>
          <div className="rh-rank-badge">{holder.rank}</div>
          <p className="rh-programme">{holder.programme}</p>
          <span className={`badge ${holder.category === 'PG' ? 'badge-blue' : 'badge-gold'} rh-cat-badge`}>
            {holder.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section (2 rows preview) ────────────────────────── */
const PREVIEW_COUNT = 12; // 2 rows × 6 cols

export default function RankHolders() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();
  const preview = rankHolders.slice(0, PREVIEW_COUNT);

  return (
    <section className="rh-section section section-white" id="rank-holders" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-tag">University Rankings</p>
          <h2 className="section-title">Our Rank Holders</h2>
          <p className="section-subtitle">
            Celebrating the outstanding academic achievements of our students who secured
            top university ranks and brought pride to JPM College.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="rh-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {[
            { num: rankHolders.length,                                     label: 'Total Rankers' },
            { num: rankHolders.filter(r => r.rank.startsWith('1st')).length, label: 'First Ranks'   },
            { num: rankHolders.filter(r => r.category === 'UG').length,    label: 'UG Ranks'      },
            { num: rankHolders.filter(r => r.category === 'PG').length,    label: 'PG Ranks'      },
          ].map((s, i, arr) => (
            <>
              <div key={s.label} className="rh-stat">
                <span className="rh-stat-num">{s.num}</span>
                <span className="rh-stat-label">{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className="rh-stat-divider" />}
            </>
          ))}
        </motion.div>

        {/* Cards grid — 2 rows */}
        <motion.div
          className="rh-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {preview.map((holder, i) => (
            <RankCard key={`${holder.name}-${i}`} holder={holder} index={i} />
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="rh-view-more-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.45 }}
        >
          <button className="rh-view-more-btn btn btn-primary" onClick={() => navigate('/rank-holders')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            View All {rankHolders.length} Rank Holders
          </button>
          <p className="rh-view-more-sub">
            Showing {PREVIEW_COUNT} of {rankHolders.length} achievers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
