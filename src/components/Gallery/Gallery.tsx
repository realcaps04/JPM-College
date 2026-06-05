import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
import { gallery } from '../../data/siteData';
import './Gallery.css';

const categories = ['All', 'Academics', 'Facilities', 'Events', 'Sports', 'Campus'];

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const filtered = cat === 'All' ? gallery : gallery.filter(g => g.category === cat);

  return (
    <section className="gallery section section-gray" id="gallery" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Campus Gallery</div>
          <h2 className="section-title">Life at JPM College</h2>
          <p className="section-subtitle">A glimpse into our vibrant campus, state-of-the-art facilities and memorable events.</p>
        </motion.div>

        {/* Category Filter */}
        <div className="gallery__filters">
          {categories.map(c => (
            <button key={c} className={`gallery__filter ${cat === c ? 'gallery__filter--active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery__grid">
          {filtered.map((item, i) => (
            <motion.div key={item.id} className={`gallery__item ${item.tall ? 'gallery__item--tall' : ''}`} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }} onClick={() => setLightbox({ src: item.src, caption: item.caption })}>
              <img src={item.src} alt={item.caption} className="gallery__img" />
              <div className="gallery__overlay">
                <ZoomIn size={20} color="#fff" />
                <span>{item.caption}</span>
              </div>
              <div className="gallery__cat-tag">{item.category}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="gallery__lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.div className="gallery__lb-inner" initial={{ scale: .9 }} animate={{ scale: 1 }} exit={{ scale: .9 }} onClick={e => e.stopPropagation()}>
              <button className="gallery__lb-close" onClick={() => setLightbox(null)}><X size={18} /></button>
              <img src={lightbox.src} alt={lightbox.caption} />
              <p>{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
