import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About',       href: '#about' },
  { label: 'Programs',    href: '#programs' },
  { label: 'Admissions',  href: '#admissions' },
  { label: 'Faculty',     href: '#faculty' },
  { label: 'Events',      href: '#events' },
  { label: 'Departments', href: '#departments' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'News',        href: '#news' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [visible, setVisible]     = useState(true);   // is navbar shown
  const [elevated, setElevated]   = useState(false);  // has shadow (scrolled)
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const heroHeight = (document.querySelector('#hero') as HTMLElement)?.offsetHeight ?? 500;

      // Always show when near the very top
      if (current < 80) {
        setVisible(true);
        setElevated(false);
        lastScrollY.current = current;
        return;
      }

      // Hide while still inside the hero section (scrolling down into hero)
      if (current < heroHeight - 120) {
        setVisible(false);
        lastScrollY.current = current;
        return;
      }

      // Past the hero: show on scroll-up, hide on scroll-down
      const scrollingDown = current > lastScrollY.current;
      setVisible(!scrollingDown);
      setElevated(true);
      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Info Bar — always pinned, never hides */}
      <div className="topbar">
        <div className="container">
          <div className="topbar__inner">
            <div className="topbar__left">
              <span className="topbar__item"><Phone size={12} /> +91 98765 43210</span>
              <span className="topbar__sep" />
              <span className="topbar__item"><Mail size={12} /> admissions@jpmcollege.edu.in</span>
            </div>
            <div className="topbar__right">
              <span className="topbar__badge">NAAC Accredited B++ · CGPA 2.85</span>
              <span className="topbar__sep" />
              <span className="topbar__badge">Admissions Open 2026–27</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`navbar ${elevated ? 'navbar--elevated' : ''}`}
        animate={{ y: visible ? 0 : '-100%' }}
        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container">
          <div className="navbar__inner">

            {/* Official Logo */}
            <a className="navbar__logo-full" href="#hero" onClick={() => scrollTo('#hero')}>
              <img
                src="/images/jpm_logo.png"
                alt="JPM Arts & Science College"
                className="navbar__full-logo-img"
              />
            </a>

            {/* Desktop nav — all direct links, no dropdowns */}
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="navbar__link"
                    onClick={() => scrollTo(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="navbar__actions">
              <button className="navbar__cta" onClick={() => scrollTo('#admissions')}>
                Apply Now
              </button>
              <button className="navbar__join" onClick={() => alert('Register / Login coming soon')}>
                Join Us
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <ul className="mobile-menu__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button className="mobile-menu__link" onClick={() => scrollTo(link.href)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mobile-menu__actions">
              <button className="mobile-menu__cta" onClick={() => scrollTo('#admissions')}>
                Apply Now
              </button>
              <button className="mobile-menu__join" onClick={() => alert('Register / Login coming soon')}>
                Join Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
