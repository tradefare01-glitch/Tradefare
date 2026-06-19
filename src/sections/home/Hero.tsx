import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wallet, Bike, Tag, Gift } from 'lucide-react';
import ScribbleCircle from '../../components/ScribbleCircle';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation (auto-play on load)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Headline lines
      const lines = headlineRef.current?.querySelectorAll('.hero-line');
      if (lines && lines.length > 0) {
        tl.fromTo(
          Array.from(lines),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          0
        );
      }

      // Device
      tl.fromTo(
        deviceRef.current,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 },
        0.15
      );

      // Sticky notes
      notesRef.current.forEach((note, i) => {
        if (note) {
          tl.fromTo(
            note,
            { scale: 0.85, opacity: 0, rotation: i % 2 === 0 ? -10 : 10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.45 },
            0.2 + i * 0.08
          );
        }
      });

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.7
      );

      // Scroll-driven exit animation (pinned)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back
            if (lines && lines.length > 0) {
              gsap.set(Array.from(lines), { x: 0, opacity: 1 });
            }
            if (deviceRef.current) {
              gsap.set(deviceRef.current, { x: 0, opacity: 1 });
            }
            notesRef.current.forEach((note) => {
              if (note) gsap.set(note, { x: 0, opacity: 1 });
            });
          },
        },
      });

      // EXIT (70-100%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0.35, ease: 'power2.in' },
        0.7
      );
      scrollTl.fromTo(
        deviceRef.current,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0.35, ease: 'power2.in' },
        0.7
      );
      notesRef.current.forEach((note) => {
        if (note) {
          scrollTl.fromTo(
            note,
            { x: 0, opacity: 1 },
            { x: '10vw', opacity: 0.35, ease: 'power2.in' },
            0.7
          );
        }
      });
      scrollTl.to(
        [headlineRef.current, deviceRef.current],
        { opacity: 0, duration: 0.05 },
        0.98
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-blue-bg overflow-hidden"
    >
      <div className="grunge-overlay" />

      {/* Scribble circles behind */}
      <div className="absolute left-[10vw] top-[18vh] opacity-20 pointer-events-none z-0">
        <ScribbleCircle size={280} />
      </div>
      <div className="absolute right-[22vw] top-[14vh] opacity-20 pointer-events-none z-0">
        <ScribbleCircle size={320} />
      </div>
      <div className="absolute left-[16vw] top-[42vh] opacity-15 pointer-events-none z-0">
        <ScribbleCircle size={160} />
      </div>

      <div className="relative z-10 w-full min-h-[100dvh] flex items-center px-4 sm:px-6 lg:px-10 pt-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left: Headline */}
          <div ref={headlineRef} className="max-w-xl">
            <span className="hero-line inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-green-accent rounded-full animate-pulse" />
              Live in 8 Campuses
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6">
              <span className="hero-line block">Your Campus</span>
              <span className="hero-line block">
                <span className="text-green-accent">Buy.</span>{' '}
                <span className="text-text-primary">Sell.</span>{' '}
                <span className="text-orange-accent italic">Earn.</span>
              </span>
              <span className="hero-line block">All in one place.</span>
            </h1>

            <p className="hero-line text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Nigeria's verified-student marketplace. Every trade escrowed, every
              seller real, every kobo accounted for. Built for OAU, FUNAAB, UI,
              UNILAG and the next 50 campuses.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <Link to="/marketplace" className="btn-primary inline-flex items-center gap-2">
                Start Your Hustle
              </Link>
              <Link
                to="/marketplace"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Browse Campus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="hero-line flex items-center gap-3 mt-6">
              <img
                src="/avatars_group.png"
                alt="Students"
                className="h-8 w-auto object-contain"
              />
              <span className="text-sm text-text-secondary">
                <strong className="text-text-primary">2,400+</strong> students
                already trading…
              </span>
            </div>
          </div>

          {/* Right: Device + Sticky Notes */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Device */}
            <div
              ref={deviceRef}
              className="relative z-10 w-[280px] sm:w-[320px] lg:w-[380px]"
            >
              <img
                src="/hero_device.png"
                alt="KampusVillage App"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Sticky Notes */}
            <div
              ref={(el) => { notesRef.current[0] = el; }}
              className="absolute left-0 lg:-left-4 top-[8%] z-20 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="sticky-note-mint rounded-lg flex items-center gap-2 text-xs">
                <Wallet className="w-4 h-4" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Escrow Released</p>
                  <p className="font-bold">+₦28,500</p>
                </div>
              </div>
            </div>

            <div
              ref={(el) => { notesRef.current[1] = el; }}
              className="absolute right-0 lg:-right-2 top-[30%] z-20 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="sticky-note-white rounded-lg flex items-center gap-2 text-xs">
                <Bike className="w-4 h-4" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Runner Accepted</p>
                  <p className="font-bold">0.4km away</p>
                </div>
              </div>
            </div>

            <div
              ref={(el) => { notesRef.current[2] = el; }}
              className="absolute left-[5%] lg:left-0 bottom-[25%] z-20 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="sticky-note-lavender rounded-lg flex items-center gap-2 text-xs">
                <Tag className="w-4 h-4" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">New Bid · AirPods Pro</p>
                  <p className="font-bold">₦75,000 · 5 bids</p>
                </div>
              </div>
            </div>

            <div
              ref={(el) => { notesRef.current[3] = el; }}
              className="absolute right-[5%] lg:right-0 bottom-[8%] z-20 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="sticky-note rounded-lg flex items-center gap-2 text-xs">
                <Gift className="w-4 h-4" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Referral Unlocked</p>
                  <p className="font-bold">₦500 wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
