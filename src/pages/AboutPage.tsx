import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Patroness from '../components/Patroness/Patroness';
import Patron from '../components/Patroness/Patron';
import Messages from '../components/Messages/Messages';
import YoutubeVideos from '../components/YoutubeVideos/YoutubeVideos';
import RankHolders from '../components/RankHolders/RankHolders';
import AboutStats from '../components/AboutStats/AboutStats';
import Placements from '../components/Placements/Placements';
import Recruiters from '../components/Recruiters/Recruiters';
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
        <YoutubeVideos />
        <RankHolders />
        <AboutStats />
        <Placements />
        <Recruiters />
      </main>
      <Footer />
    </>
  );
}
