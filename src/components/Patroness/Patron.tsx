import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Patroness.css'; // Reusing the beautifully aligned classes

export default function Patron() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="patroness section" id="patron" ref={ref} style={{ backgroundColor: '#ffffff', paddingTop: 0 }}>
      <div className="container">
        <div className="patroness__grid patroness__grid--reverse">
          {/* Content */}
          <motion.div
            className="patroness__content"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Our Heavenly Patron</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
              St. John Paul II
            </h2>
            <div className="divider divider-left" style={{ marginBottom: '24px' }} />
            
            <p className="patroness__para">
              St. John Paul II, who was the head of the Roman Catholic church from 1978 to 2005 is one of the most memorable Popes of modern times. JPM Arts and Science College bears the name of this holy man and professes his vision and mission of life.
            </p>
            <p className="patroness__para">
              This Pope lived during last century’s most turbulent times and offered a clear moral vision and direction to the Catholic Church. As part of his effort to promote greater understanding among nations and religions, he undertook to visit many countries travelling far and wide. He extended his influence beyond the Catholic Church by campaigning against political oppression and criticizing the materialism of the West. Most importantly, John Paul used his influence among Catholics throughout the world to urge the recognition of human dignity and to deter the use of violence.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="patroness__img-section"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="patroness__img-container">
              <div className="patroness__img-wrap">
                <img 
                  src="https://i.pinimg.com/474x/3d/1a/0c/3d1a0cb777774b45764e84ce10c73ac5.jpg" 
                  alt="St. John Paul II" 
                  className="patroness__img" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
