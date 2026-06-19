import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import Hero from '../sections/home/Hero';
import MarketplacePreview from '../sections/home/MarketplacePreview';
import Problems from '../sections/home/Problems';
import CampusMarquee from '../sections/home/CampusMarquee';
import Ecosystem from '../sections/home/Ecosystem';
import HowItWorks from '../sections/home/HowItWorks';
import ForStudents from '../sections/home/ForStudents';
import Pricing from '../sections/home/Pricing';
import Testimonials from '../sections/home/Testimonials';
import FAQ from '../sections/home/FAQ';
import FinalCTA from '../sections/home/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Global snap for pinned sections
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <Ticker />
        <MarketplacePreview />
        <Problems />
        <CampusMarquee />
        <Ecosystem />
        <HowItWorks />
        <ForStudents />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
