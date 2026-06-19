import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Star, ShoppingBag, MessageCircle, TrendingUp, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const floatIcons = [
  { Icon: Phone, top: '8%', right: '8%' },
  { Icon: Star, top: '12%', left: '5%' },
  { Icon: ShoppingBag, top: '30%', right: '3%' },
  { Icon: MessageCircle, bottom: '25%', left: '8%' },
  { Icon: TrendingUp, bottom: '12%', right: '12%' },
  { Icon: Users, top: '50%', left: '3%' },
];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = leftRef.current?.querySelector('.cta-heading');
      const ctas = leftRef.current?.querySelector('.cta-buttons');
      const collage = rightRef.current?.querySelector('.collage-container');
      const photo = rightRef.current?.querySelector('.collage-photo');
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

      if (ctas) {
        scrollTl.fromTo(
          ctas,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        );
      }

      if (collage) {
        scrollTl.fromTo(
          collage,
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }

      if (photo) {
        scrollTl.fromTo(
          photo,
          { scale: 0.98, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'none' },
          0.1
        );
      }

      if (icons) {
        scrollTl.fromTo(
          icons,
          { scale: 0.6, opacity: 0 },
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
      className="relative min-h-[100dvh] bg-blue-bg overflow-hidden"
    >
      <div className="grunge-overlay" />

      <div className="relative z-10 w-full min-h-[100dvh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center px-4 sm:px-6 lg:px-10">
          {/* Left Content */}
          <div ref={leftRef} className="max-w-lg">
            <h2 className="cta-heading font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight mb-4">
              Your campus is already on KampusVillage.
              <br />
              <span className="text-green-accent italic">Are you?</span>
            </h2>

            <p className="cta-heading text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              Join thousands of students buying, selling, and getting things
              done across campus on KampusVillage.
            </p>

            <div className="cta-buttons flex flex-wrap items-center gap-4">
              <Link to="/marketplace" className="btn-primary inline-flex items-center gap-2">
                Build a Store
              </Link>
              <Link
                to="/marketplace"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>

          {/* Right Collage */}
          <div ref={rightRef} className="relative flex justify-center lg:justify-end">
            <div className="collage-container relative w-full max-w-md">
              {/* Main rounded rectangle */}
              <div className="relative bg-cream border-2 border-text-primary rounded-3xl overflow-hidden shadow-sticky aspect-[4/3]">
                <img
                  src="/students_photo.jpg"
                  alt="Students using KampusVillage"
                  className="collage-photo w-full h-full object-cover"
                />

                {/* Floating icons around the collage */}
                {floatIcons.map(({ Icon, top, right, left, bottom }, i) => (
                  <div
                    key={i}
                    className="float-icon absolute animate-float"
                    style={{
                      top,
                      right,
                      left,
                      bottom,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-accent border-2 border-text-primary rounded-full flex items-center justify-center shadow-card">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
