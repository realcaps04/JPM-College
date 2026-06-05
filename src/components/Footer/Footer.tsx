import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { label: 'About the College', href: '#about' },
  { label: 'Academic Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Events', href: '#events' },
  { label: 'News & Research', href: '#news' },
];
const resources = ['Student Portal', 'Academic Calendar', 'Exam Schedule', 'Scholarships', 'NAAC Reports', 'Anti-Ragging Cell', 'IQAC', 'RTI'];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-emblem">
                  <img src="/images/emblem.png" alt="JPM Emblem" className="footer__emblem-img" />
                </div>
                <div>
                  <div className="footer__logo-name">JPM Arts &amp; Science College</div>
                  <div className="footer__logo-sub">Affiliated to MG University · Est. 1999</div>
                </div>
              </div>
              <p className="footer__desc">
                A premier government-aided institution committed to holistic education, research excellence, and building leaders who serve society with integrity.
              </p>
              <div className="footer__social">
                {[{ icon: <Facebook size={15} />, label: 'Facebook' }, { icon: <Twitter size={15} />, label: 'Twitter' }, { icon: <Instagram size={15} />, label: 'Instagram' }, { icon: <Youtube size={15} />, label: 'YouTube' }].map(s => (
                  <a key={s.label} href="#" className="footer__social-btn" aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__link"><ArrowRight size={11} /> {l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer__col">
              <h4 className="footer__col-title">Resources</h4>
              <ul className="footer__links">
                {resources.map(r => (
                  <li key={r}><a href="#" className="footer__link"><ArrowRight size={11} /> {r}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <ul className="footer__contact">
                <li className="footer__contact-item"><MapPin size={13} /><span>JPM Campus, Labbakkada,<br />Kanchiyar, Kerala – 685 511</span></li>
                <li className="footer__contact-item"><Phone size={13} /><span>+91 9562034555, +91 7025815009</span></li>
                <li className="footer__contact-item"><Mail size={13} /><span>jpm@jpmcollege.ac.in</span></li>
              </ul>
              <h4 className="footer__col-title" style={{ marginTop: '20px' }}>Newsletter</h4>
              <div className="footer__newsletter">
                <input type="email" placeholder="Your email" className="footer__newsletter-input" />
                <button className="footer__newsletter-btn"><ArrowRight size={15} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation Bar */}
      <div className="footer__accred">
        <div className="container">
          <div className="footer__accred-inner">
            <span>🏛️ NAAC Accredited B++</span>
            <span className="footer__accred-sep" />
            <span>🎓 Affiliated to Mahatma Gandhi University</span>
            <span className="footer__accred-sep" />
            <span>📋 UGC Recognized</span>
            <span className="footer__accred-sep" />
            <span>🏅 ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <span>© {new Date().getFullYear()} JPM Arts &amp; Science College. All rights reserved.</span>
            <div className="footer__bottom-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Use</a>
              <span>|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
