
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer'
import FAQ from './components/FAQ';
import Announcement from './components/Announcement';
import Download from './components/Download';

export default function Home() {
  return (
    <>
      <Announcement />
      <Hero />
      <Features />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
}