import { motion } from 'framer-motion';
import { ArrowRight, Award, Star, Shield, BookOpen, MapPin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero section-white" id="hero">
      <div className="container">
        <div className="hero__grid">
          {/* ── Left: Text Content ── */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Institution type tag */}
            <div className="hero__tag">
              <BookOpen size={14} />
              Government Aided Arts &amp; Science College
            </div>

            <h1 className="hero__title">
              JPM Arts &amp;<br />
              <span className="hero__title-accent">Science College</span>
            </h1>

            <div className="hero__divider" />

            <p className="hero__subtitle">
              A premier institution of higher education in Kerala, dedicated to
              academic excellence, character development and producing graduates
              who lead with integrity and innovation.
            </p>

            {/* Accreditation Badges */}
            <div className="hero__badges">
              <div className="hero__badge">
                <Award size={16} className="hero__badge-icon" />
                <div>
                  <div className="hero__badge-label">NAAC Accredited</div>
                  <div className="hero__badge-value">Grade B++</div>
                </div>
              </div>
              <div className="hero__badge">
                <Star size={16} className="hero__badge-icon" />
                <div>
                  <div className="hero__badge-label">Affiliated to</div>
                  <div className="hero__badge-value">MG University</div>
                </div>
              </div>
              <div className="hero__badge">
                <Shield size={16} className="hero__badge-icon" />
                <div>
                  <div className="hero__badge-label">Established</div>
                  <div className="hero__badge-value">Since 1999</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero__actions">
              <button className="btn btn-primary" onClick={() => scrollTo('#admissions')}>
                Apply for Admission <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline-blue" onClick={() => scrollTo('#programs')}>
                Explore Programs
              </button>
            </div>
          </motion.div>

          {/* ── Right: Campus Photo Card ── */}
          <motion.div
            className="hero__image-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="hero__img-card">
              <div className="hero__img-header">
                <MapPin size={14} className="hero__img-header-icon" />
                <span className="hero__img-header-label">Our Campus · Labbakkada, Kanchiyar, Idukki, Kerala, India</span>
              </div>
              <img
                src="/images/real_campus.jpg"
                alt="JPM Arts & Science College Campus"
                className="hero__campus-img"
              />
              {/* Overlay info strip */}
              <div className="hero__img-footer">
                <div className="hero__img-stat">
                  <span className="hero__img-stat-num">3,500+</span>
                  <span className="hero__img-stat-label">Students</span>
                </div>
                <div className="hero__img-sep" />
                <div className="hero__img-stat">
                  <span className="hero__img-stat-num">120+</span>
                  <span className="hero__img-stat-label">Faculty</span>
                </div>
                <div className="hero__img-sep" />
                <div className="hero__img-stat">
                  <span className="hero__img-stat-num">18</span>
                  <span className="hero__img-stat-label">Departments</span>
                </div>
                <div className="hero__img-sep" />
                <div className="hero__img-stat">
                  <span className="hero__img-stat-num">25 yrs</span>
                  <span className="hero__img-stat-label">Excellence</span>
                </div>
              </div>
            </div>

            {/* Floating announcement card */}
            <motion.div
              className="hero__announce"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__announce-dot" />
              <div>
                <div className="hero__announce-title">Admissions Open</div>
                <div className="hero__announce-sub">2026–27 Academic Year</div>
              </div>
              <button
                className="hero__announce-btn"
                onClick={() => scrollTo('#admissions')}
              >
                Apply →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
