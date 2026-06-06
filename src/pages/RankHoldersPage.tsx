import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { rankHolders, RankCard } from '../components/RankHolders/RankHolders';
import './RankHoldersPage.css';

type FilterTab = 'All' | 'UG' | 'PG';

export default function RankHoldersPage() {
  const [filter, setFilter] = useState<FilterTab>('All');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = filter === 'All' ? rankHolders : rankHolders.filter((r) => r.category === filter);
  const tabs: FilterTab[] = ['All', 'UG', 'PG'];

  return (
    <>
      <Navbar />
      <main className="rhp-main">
        {/* Hero */}
        <section className="rhp-hero">
          <div className="rhp-hero-bg" />
          <div className="container">
            <motion.div
              className="rhp-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button className="rhp-back-btn" onClick={() => navigate('/about')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back to About
              </button>
              <p className="section-tag" style={{ color: 'var(--gold-light)' }}>University Rankings</p>
              <h1 className="rhp-hero-title">Our Rank Holders</h1>
              <p className="rhp-hero-sub">
                A complete list of JPM College students who achieved outstanding university ranks,
                embodying excellence and dedication in their academic pursuits.
              </p>

              {/* Hero stats */}
              <div className="rhp-hero-stats">
                {[
                  { num: rankHolders.length, label: 'Total Achievers' },
                  { num: rankHolders.filter(r => r.rank.startsWith('1st')).length, label: 'First Ranks' },
                  { num: rankHolders.filter(r => r.category === 'UG').length, label: 'UG Rankers' },
                  { num: rankHolders.filter(r => r.category === 'PG').length, label: 'PG Rankers' },
                ].map((s) => (
                  <div key={s.label} className="rhp-hero-stat">
                    <span className="rhp-stat-num">{s.num}</span>
                    <span className="rhp-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="rhp-content section section-white">
          <div className="container">
            {/* Filter */}
            <motion.div
              className="rhp-filter-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <span className="rhp-filter-label">Filter by:</span>
              <div className="rh-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`rh-tab${filter === tab ? ' rh-tab--active' : ''}`}
                    onClick={() => setFilter(tab)}
                  >
                    {tab === 'All' ? 'All Students' : tab === 'UG' ? 'Under Graduate' : 'Post Graduate'}
                    <span className="rh-tab-count">
                      {tab === 'All' ? rankHolders.length : rankHolders.filter(r => r.category === tab).length}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className="rh-grid"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((holder, i) => (
                  <RankCard key={`${holder.name}-${i}`} holder={holder} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
