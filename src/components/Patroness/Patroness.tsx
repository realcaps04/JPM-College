import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Patroness.css';

export default function Patroness() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="patroness section" id="patroness" ref={ref}>
      <div className="container">
        <div className="patroness__grid">
          {/* Content */}
          <motion.div
            className="patroness__content"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Our Heavenly Patroness</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
              St. Therese of Lisieux
            </h2>
            <div className="divider divider-left" style={{ marginBottom: '24px' }} />
            
            <p className="patroness__para">
              Saint Thérèse of Lisieux (French: Sainte-Thérèse de Lisieux), born Marie Françoise-Thérèse Martin (2 January 1873 – 30 September 1897), also known as Saint Thérèse of the Child Jesus and the Holy Face, O.C.D., was a Roman Catholic French Discalced Carmelite nun who is widely venerated in modern times. She is popularly known as "The Little Flower of Jesus" or simply "The Little Flower".
            </p>
            <p className="patroness__para">
              Thérèse has been a highly influential model of sanctity for Catholics and for others because of the "simplicity and practicality of her approach to the spiritual life". Together with Saint Francis of Assisi, she is one of the most popular saints in the history of the church.
            </p>

            <div className="patroness__quote-box">
              <div className="patroness__quote-text">"The greatest saint of modern times"</div>
              <div className="patroness__quote-author">— Pope Pius X</div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="patroness__img-section"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="patroness__img-container">
              <div className="patroness__img-wrap">
                <img 
                  src="https://img.freepik.com/premium-photo/blooming-devotion-st-therese-lisieux-embracing-flowers-faith_1000124-240434.jpg" 
                  alt="St. Therese of Lisieux" 
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
