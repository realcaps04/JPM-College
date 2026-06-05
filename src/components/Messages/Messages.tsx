import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';
import './Messages.css';

const managerParagraphs = [
  'JPM Arts and Science College proudly advances into its 16th year of successful educational endeavors with the vision of "Lighted to Enlighten" young minds. In this era of rapid transformation in higher education, we are excited to align with the New Education Policy, which aims to foster a more holistic and flexible learning environment.',
  'Our serene campus offers an environment conducive to intellectual, physical, spiritual, and emotional growth. At JPM, campus life is both exciting and demanding, with a focus on holistic development. Our competent and committed faculty are dedicated to shaping your future, ensuring that "Lighted to Enlighten" remains our guiding principle.',
  'I encourage all staff and students to embrace the opportunities provided at JPM and work diligently towards their goals. Together, let\'s create positive change and pursue our dreams.'
];

const principalParagraphs = [
  'Education is the key that unlocks the golden door to freedom and the most cherished possession one can have. The goal of education is the advancement of knowledge and the dissemination of truth. It seeks to drive away ignorance and through illumination it emboldens a man to a righteous thought and action. JPM Arts and Science College is a premier educational institution in the High ranges of Idukki, coming under the Mahatma Gandhi University Kottayam. Even in monumentally challenging times of the pandemic, JPM has emerged as a beacon of excellence holding the true spirit of education. Having had accredited by NAAC with B++, the College is all set to scale newer heights in the upcoming years. Its student culture is as vibrant as its history is rich, ably backed up by a bunch of talented young teachers who spearhead the proceedings.',
  'In order to accomplish its avowed vision and mission, the college is prepared to take as much effort as possible for the betterment of its perceived academic pursuits. I believe that education is an effective medium of social transformation. and get encouragement, looking at bright and successful careers of our hundreds of students, which subsequently benefit the society.',
  'We feel proud that we are part of an excellent institute, which is shaping modern India. JPM Arts and Science College is endowed with progressive futuristic outlook aiming at continual growth in the quality of all academic activities with a sense of commitment to fully meet the expectations of the students, parents and society at large. I am very happy with the progress the college has made over the years by imbibing in its students value-based education synergized with modern teaching-learning methods to produce a generation of well informed and emotionally sound individuals. I firmly believe that our college is more than just a place to learn. It gives a chance to grow by equipping with everything one needs to achieve excellence.',
  'Wishing all the best in the world of the future.'
];

function getTruncatedText(paragraphs: string[], maxLength: number = 680) {
  const combined = paragraphs.join(' ');
  if (combined.length <= maxLength) return combined;
  return combined.substring(0, maxLength).trim() + '...';
}

export default function Messages() {
  const { ref: managerRef, inView: managerInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: principalRef, inView: principalInView } = useInView({ threshold: 0.15, triggerOnce: true });

  const [activeModal, setActiveModal] = useState<'manager' | 'principal' | null>(null);

  const managerTruncated = getTruncatedText(managerParagraphs);
  const principalTruncated = getTruncatedText(principalParagraphs);

  return (
    <>
      {/* Manager's Message */}
      <section className="leadership section" id="manager-message" ref={managerRef}>
        <div className="container">
          <div className="leadership__grid">
            <motion.div
              className="leadership__img-section"
              initial={{ opacity: 0, x: -30 }}
              animate={managerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="leadership__img-container">
                <div className="leadership__img-wrap">
                  <img 
                    src="https://www.jpmcollege.ac.in/Assets/home_page/Files/0.65560200%201723124458Fr-Johnson-Mundiyath-CST.jpg" 
                    alt="Rev. Fr. Johnson Mundiyath CST" 
                    className="leadership__img" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="leadership__content"
              initial={{ opacity: 0, x: 30 }}
              animate={managerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="section-tag">Message from the Manager</div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
                Guiding with Vision & Purpose
              </h2>
              <div className="divider divider-left" style={{ marginBottom: '24px' }} />
              
              <p className="leadership__para">
                {managerTruncated}
                {managerParagraphs.join(' ').length > 680 && (
                  <button className="leadership__read-more" onClick={() => setActiveModal('manager')}>
                    Read more
                  </button>
                )}
              </p>

              <div className="leadership__author">
                <div className="leadership__author-name">Rev. Fr. Johnson Mundiyath CST</div>
                <div className="leadership__author-title">Manager, JPM Arts and Science College</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="leadership section leadership--white" id="principal-message" ref={principalRef}>
        <div className="container">
          <div className="leadership__grid leadership__grid--reverse">
            <motion.div
              className="leadership__content"
              initial={{ opacity: 0, x: -30 }}
              animate={principalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag">Message from the Principal</div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
                Unlocking the Golden Door to Freedom
              </h2>
              <div className="divider divider-left" style={{ marginBottom: '24px' }} />
              
              <p className="leadership__para">
                {principalTruncated}
                {principalParagraphs.join(' ').length > 680 && (
                  <button className="leadership__read-more" onClick={() => setActiveModal('principal')}>
                    Read more
                  </button>
                )}
              </p>

              <div className="leadership__author">
                <div className="leadership__author-name">Principal</div>
                <div className="leadership__author-title">JPM Arts and Science College</div>
              </div>
            </motion.div>

            <motion.div
              className="leadership__img-section"
              initial={{ opacity: 0, x: 30 }}
              animate={principalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="leadership__img-container">
                <div className="leadership__img-wrap">
                  <img 
                    src="https://www.jpmcollege.ac.in/Assets/home%20page/Files/0.36689400%201685593677johnson-sir-jpm-college-principal.jpg" 
                    alt="Principal" 
                    className="leadership__img" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="leadership-modal">
            <motion.div
              className="leadership-modal__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              className="leadership-modal__content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button className="leadership-modal__close" onClick={() => setActiveModal(null)} aria-label="Close modal">
                <X size={20} />
              </button>
              
              <div className="leadership-modal__header">
                <div className="section-tag">
                  {activeModal === 'manager' ? 'Message from the Manager' : 'Message from the Principal'}
                </div>
                <h2 className="section-title" style={{ textAlign: 'left', margin: '0' }}>
                  {activeModal === 'manager' ? 'Rev. Fr. Johnson Mundiyath CST' : 'Principal'}
                </h2>
              </div>
              
              <div className="leadership-modal__body">
                {(activeModal === 'manager' ? managerParagraphs : principalParagraphs).map((para, idx) => (
                  <p key={idx} className="leadership__para">{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
