import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlus, CreditCard, ShoppingCart, Banknote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Create Account',
    desc: 'Sign up with your email address and verify your campus identity in seconds.',
    icon: UserPlus,
    rotation: -2,
    bg: 'bg-yellow-accent',
  },
  {
    num: '02',
    title: 'Fund Wallet',
    desc: 'Top up your KampusWallet. Escrow holds it safely until each transaction completes.',
    icon: CreditCard,
    rotation: 2,
    bg: 'bg-lavender',
  },
  {
    num: '03',
    title: 'Buy, Sell or Earn',
    desc: 'List items, buy used goods, post errands, or become a runner. All from one dashboard.',
    icon: ShoppingCart,
    rotation: -1,
    bg: 'bg-cream',
  },
  {
    num: '04',
    title: 'Get Paid',
    desc: 'Funds release instantly after confirmed delivery or task completion. No delays.',
    icon: Banknote,
    rotation: 3,
    bg: 'bg-[#A8E6CF]',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.section-heading');
      const cards = sectionRef.current?.querySelectorAll('.step-card');

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
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-blue-bg py-16 lg:py-24">
      <div className="grunge-overlay" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="section-heading text-center mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6">
            🤩 How It Works
          </span>
        </div>

        <div className="section-heading text-center mb-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-3">
            Live on KampusVillage in{' '}
            <span className="text-green-accent italic">under 2 minutes.</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            Escrow-backed, verified-student marketplace. Your safety is our priority.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`step-card ${step.bg} border-2 border-text-primary shadow-sticky p-5 lg:p-6 rounded-xl`}
              style={{ transform: `rotate(${step.rotation}deg)` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl lg:text-4xl font-display text-text-primary/20">
                  {step.num}
                </span>
                <div className="w-10 h-10 bg-text-primary/5 rounded-full flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
