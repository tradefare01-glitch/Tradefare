import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, PiggyBank, ShieldCheck, TrendingUp, Phone, Star, Bell, ShoppingBag, MessageCircle } from 'lucide-react';
import ScribbleCircle from '../../components/ScribbleCircle';

gsap.registerPlugin(ScrollTrigger);

const valueCards = [
  {
    title: 'Save money. Make money.',
    items: [
      'Buy and sell with full escrow protection',
      'Earn ₦20k-₦60k/month running errands',
      'Move on from the WhatsApp scam era',
    ],
    icon: PiggyBank,
    bg: 'bg-cream',
  },
  {
    title: 'Structured. Trusted. Safe.',
    items: [
      'Unregulated trade → verifiable platform',
      'Scam complaints drop to admin offices',
      'Boosts student welfare and campus economy',
    ],
    icon: ShieldCheck,
    bg: 'bg-lavender',
  },
  {
    title: 'Visible. Paid. Growing.',
    items: [
      'Visibility to thousands of student customers',
      'Guaranteed payment, escrow releases on completion',
      'Zero listing fees. You only pay when you earn',
    ],
    icon: TrendingUp,
    bg: 'bg-yellow-accent',
  },
];

const floatIcons = [
  { Icon: Phone, top: '5%', right: '5%', delay: '0s' },
  { Icon: Star, top: '15%', left: '5%', delay: '0.5s' },
  { Icon: Bell, top: '35%', right: '8%', delay: '1s' },
  { Icon: ShoppingBag, bottom: '30%', left: '3%', delay: '1.5s' },
  { Icon: MessageCircle, bottom: '15%', right: '10%', delay: '2s' },
];

export default function ForStudents() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = leftRef.current?.querySelector('.fs-heading');
      const cards = leftRef.current?.querySelectorAll('.value-card');
      const phoneCircle = rightRef.current?.querySelector('.phone-circle');
      const icons = rightRef.current?.querySelectorAll('.float-icon');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      if (heading) {
        scrollTl.fromTo(
          heading,
          { x: '-18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }

      if (cards) {
        scrollTl.fromTo(
          cards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.05
        );
      }

      if (phoneCircle) {
        scrollTl.fromTo(
          phoneCircle,
          { x: '18vw', scale: 0.95, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, ease: 'none' },
          0
        );
      }

      if (icons) {
        scrollTl.fromTo(
          icons,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.02, ease: 'back.out(1.8)' },
          0.15
        );
      }

      // EXIT (70-100%)
      scrollTl.fromTo(
        leftRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0.35, ease: 'power2.in' },
        0.7
      );
      scrollTl.fromTo(
        rightRef.current,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0.35, ease: 'power2.in' },
        0.7
      );
      scrollTl.to([leftRef.current, rightRef.current], { opacity: 0, duration: 0.05 }, 0.98);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <div className="grunge-overlay" />

      <div className="relative z-10 w-full min-h-[100dvh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left - Cream Side */}
          <div
            ref={leftRef}
            className="bg-cream px-4 sm:px-6 lg:px-10 py-16 lg:py-0 min-h-[50vh] lg:min-h-[100dvh] flex flex-col justify-center"
          >
            <span className="fs-heading inline-flex items-center gap-2 px-3 py-1.5 bg-blue-bg border-2 border-text-primary rounded-full text-xs font-semibold mb-6 w-fit">
              🎓 Why KampusVillage
            </span>

            <h2 className="fs-heading font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
              Built for every side of the{' '}
              <span className="italic">campus economy.</span>
            </h2>

            <p className="fs-heading text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              From buying your first textbook to hiring a runner for errands,
              KampusVillage is built for how students actually live.
            </p>

            <Link
              to="/marketplace"
              className="fs-heading btn-primary w-fit inline-flex items-center gap-2 mb-10"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Value Cards */}
            <div className="space-y-4">
              {valueCards.map((card) => (
                <div
                  key={card.title}
                  className={`value-card ${card.bg} border-2 border-text-primary shadow-card p-4 rounded-xl`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-5 h-5 text-text-primary" />
                    <h3 className="font-bold text-sm text-text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-text-secondary flex items-start gap-1.5"
                      >
                        <span className="text-green-accent mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Blue Side */}
          <div
            ref={rightRef}
            className="relative bg-blue-bg min-h-[50vh] lg:min-h-[100dvh] flex items-center justify-center p-8"
          >
            {/* Scribble circle behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ScribbleCircle size={400} className="opacity-20" />
            </div>

            {/* Phone Circle */}
            <div className="phone-circle relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-text-primary shadow-sticky bg-white">
              <img
                src="/hero_device.png"
                alt="KampusVillage App"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Icons */}
            {floatIcons.map(({ Icon, top, right, left, bottom, delay }, i) => (
              <div
                key={i}
                className="float-icon absolute animate-float"
                style={{
                  top,
                  right,
                  left,
                  bottom,
                  animationDelay: delay,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream border-2 border-text-primary rounded-full flex items-center justify-center shadow-card">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
