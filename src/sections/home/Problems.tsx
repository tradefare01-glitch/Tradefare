import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquareWarning, Footprints, ShieldAlert, EyeOff, Coins, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    num: '01',
    title: 'WhatsApp Chaos',
    desc: 'Group-chat trades have no receipts, no ratings, no recourse. One screenshot away from disaster.',
    icon: MessageSquareWarning,
    rotation: -2,
    bg: 'bg-yellow-accent',
  },
  {
    num: '02',
    title: 'No Trusted Errand System',
    desc: '"Pls who fit help me?" in the group chat is not a system. No accountability, no tracking, no refund.',
    icon: Footprints,
    rotation: 3,
    bg: 'bg-lavender',
  },
  {
    num: '03',
    title: 'Scams & Fake Sellers',
    desc: 'Fake listings. Ghost sellers. "Send first" hostage tactics. Students lose millions every semester.',
    icon: ShieldAlert,
    rotation: -1,
    bg: 'bg-cream',
  },
  {
    num: '04',
    title: 'Hidden Artisans',
    desc: 'Campus tailors, barbers and technicians who\'d love steady work, but can\'t find paying customers consistently.',
    icon: EyeOff,
    rotation: 2,
    bg: 'bg-[#A8E6CF]',
  },
  {
    num: '05',
    title: 'Lost Side Income',
    desc: 'You\'d happily run errands for \u20A6500 to \u20A62,000 a pop. There\'s just been no safe, structured way to do it.',
    icon: Coins,
    rotation: -3,
    bg: 'bg-yellow-accent',
  },
  {
    num: '06',
    title: 'Costly Study Materials',
    desc: 'Hunting WhatsApp PDFs and queueing for photocopies, for material that could be \u20A6200 and instant.',
    icon: BookOpen,
    rotation: 1,
    bg: 'bg-lavender',
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.section-heading');
      const cards = sectionRef.current?.querySelectorAll('.problem-card');

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (cards) {
        cards.forEach((card, i) => {
          const fromY = i < 3 ? -30 : 30;
          gsap.fromTo(
            card,
            { y: fromY, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                once: true,
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-blue-bg py-16 lg:py-24">
      <div className="grunge-overlay" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        {/* Label */}
        <div className="section-heading text-center mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold">
            <span className="text-orange-accent">😡</span> The Situation
          </span>
        </div>

        {/* Heading */}
        <div className="section-heading text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary">
            Campus trade is broken.{" "}
            <span className="text-orange-accent italic">We fixed it.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.num}
              className={`problem-card ${problem.bg} border-2 border-text-primary shadow-sticky p-5 lg:p-6 rounded-xl`}
              style={{ transform: `rotate(${problem.rotation}deg)` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl lg:text-4xl font-display text-text-primary/20">
                  {problem.num}
                </span>
                <problem.icon className="w-6 h-6 text-text-primary/60" />
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
