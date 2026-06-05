import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock } from 'lucide-react';
import { news } from '../../data/siteData';
import './News.css';

const catStyle: Record<string, { bg: string; color: string }> = {
  Research: { bg: '#dbeafe', color: '#1e40af' },
  Achievement: { bg: '#dcfce7', color: '#166534' },
  Partnership: { bg: '#fef3c7', color: '#92400e' },
};

export default function News() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="news section section-blue" id="news" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Latest Updates</div>
          <h2 className="section-title" style={{ color: '#fff' }}>News &amp; Research</h2>
          <p className="section-subtitle">Achievements, breakthroughs and partnerships shaping the future of JPM College.</p>
        </motion.div>

        <div className="news__grid">
          {news.map((n, i) => {
            const style = catStyle[n.category] || { bg: '#f3f4f6', color: '#374151' };
            return (
              <motion.article key={n.id} className="news__card" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div className="news__img-wrap">
                  <img src={n.image} alt={n.title} className="news__img" />
                  <span className="news__cat" style={{ background: style.bg, color: style.color }}>{n.category}</span>
                </div>
                <div className="news__body">
                  <div className="news__meta">
                    <span>{n.date}</span>
                    <span className="news__dot" />
                    <Clock size={11} />
                    <span>{n.readTime}</span>
                  </div>
                  <h3 className="news__title">{n.title}</h3>
                  <p className="news__excerpt">{n.excerpt}</p>
                  <button className="news__more">Read More <ArrowRight size={14} /></button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn btn-gold">View All News</button>
        </div>
      </div>
    </section>
  );
}
