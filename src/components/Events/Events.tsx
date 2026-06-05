import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock } from 'lucide-react';
import { events } from '../../data/siteData';
import './Events.css';

const catColor: Record<string, string> = { Academic: '#004b80', Cultural: '#7c3aed', Science: '#065f46', Sports: '#991b1b' };

export default function Events() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="events section section-gray" id="events" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="section-tag">Campus Life</div>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Seminars, cultural fests, sports meets and more — stay connected with campus life.</p>
        </motion.div>

        <div className="events__grid">
          {events.map((ev, i) => (
            <motion.div key={ev.id} className="events__card card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="events__date-col" style={{ background: catColor[ev.category] || '#004b80' }}>
                <span className="events__day">{ev.date.day}</span>
                <span className="events__month">{ev.date.month}</span>
                <span className="events__year">{ev.date.year}</span>
              </div>
              <div className="events__body">
                <span className="events__cat" style={{ color: catColor[ev.category] || '#004b80', background: `${catColor[ev.category] || '#004b80'}12` }}>
                  {ev.category}
                </span>
                <h3 className="events__title">{ev.title}</h3>
                <p className="events__desc">{ev.description}</p>
                <div className="events__meta">
                  <span><MapPin size={12} /> {ev.location}</span>
                  <span><Clock size={12} /> {ev.time}</span>
                </div>
              </div>
              <button className="events__btn">Register</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
