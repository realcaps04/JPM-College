import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Programs from '../components/Programs/Programs';
import Admissions from '../components/Admissions/Admissions';
import Faculty from '../components/Faculty/Faculty';
import Events from '../components/Events/Events';
import Departments from '../components/Departments/Departments';
import Gallery from '../components/Gallery/Gallery';
import News from '../components/News/News';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Admissions />
        <Faculty />
        <Events />
        <Departments />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
