import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Patroness from '../components/Patroness/Patroness';
import Patron from '../components/Patroness/Patron';
import Messages from '../components/Messages/Messages';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <Patroness />
        <Patron />
        <Messages />
      </main>
      <Footer />
    </>
  );
}
