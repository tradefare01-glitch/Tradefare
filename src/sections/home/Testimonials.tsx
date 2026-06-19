import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'Sold my old PS4 in 3 days, picked up ₦145K, funded my JAMB form. WhatsApp group cannot do this.',
    author: '@william_dron',
    school: 'UNILAG · 300L · Comp Science',
    rotation: -1,
  },
  {
    quote:
      "I've made ₦42,000 this semester running errands between classes. Rent? Handled.",
    author: '@mubaraq',
    school: 'FUNAAB · 200L · AGAD',
    rotation: 1,
  },
  {
    quote:
      'Booked a tailor for matric pictures in 10 minutes. Ten minutes. Still don\'t believe it.',
    author: '@tailored_by_bami',
    school: 'OAU · 100L · English',
    rotation: -1,
  },
  {
    quote:
      'Bought a slightly used MacBook for my final year. Escrow held the cash till I confirmed. Slept well.',
    author: '@dami.codes',
    school: 'OOU · 400L · Software Eng.',
    rotation: 1,
  },
  {
    quote:
      'Listed my hostel\'s used mini-fridge before lunch. Sold by 6pm. KampusWallet credited instantly.',
    author: '@adaeze.x',
    school: 'UNN · 300L · Mass Comm',
    rotation: -1,
  },
  {
    quote:
      'No more group-chat scams. Saw the verified tick, paid, got my AirPods next morning.',
    author: '@tobirino',
    school: 'UI · 400L · Mech Eng.',
    rotation: 1,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.section-heading');
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');

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
            stagger: 0.08,
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
        <div className="section-heading text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6">
            🤩 Testimony
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary">
            What students are saying,{' '}
            <span className="italic">in their own slang.</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card card-cream rounded-xl p-5 lg:p-6"
              style={{ transform: `rotate(${t.rotation}deg)` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-accent text-yellow-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-text-primary leading-relaxed mb-4">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-text-primary/10">
                <p className="text-sm font-semibold text-green-accent">
                  {t.author}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">{t.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
