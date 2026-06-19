import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const campuses = [
  'FUNAAB',
  'UI',
  'OAU',
  'UNIABUJA',
  'UNN',
  'OOU',
  'UNILAG',
];

export default function CampusMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          x: '-25%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content = campuses.map((campus, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="font-display text-xl sm:text-2xl lg:text-3xl text-text-primary tracking-tight px-4 lg:px-6">
        {campus}
      </span>
      <span className="text-yellow-accent text-lg">★</span>
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      className="relative bg-blue-bg border-y-2 border-text-primary py-6 lg:py-8 overflow-hidden"
    >
      <div className="grunge-overlay" />
      <div
        ref={marqueeRef}
        className="relative z-10 flex items-center whitespace-nowrap"
      >
        {content}
        {content}
        {content}
        {content}
      </div>

      {/* Scribble underline SVG */}
      <svg
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl pointer-events-none"
        height="12"
        viewBox="0 0 600 12"
        fill="none"
      >
        <path
          d="M2 8C100 2 200 10 300 6C400 2 500 10 598 4"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </section>
  );
}
