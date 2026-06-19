import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Store, Bike, Wrench, Wallet, BookOpen, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { num: '01', label: 'Campus Marketplace', icon: ShoppingCart },
  { num: '02', label: 'Vendor Storefronts', icon: Store },
  { num: '03', label: 'Trusted Runners', icon: Bike },
  { num: '04', label: 'Campus Artisans', icon: Wrench },
  { num: '05', label: 'KampusWallet Escrow', icon: Wallet },
  { num: '06', label: 'PDF Library on Demand', icon: BookOpen },
  { num: '07', label: 'Roommate Match', icon: Users },
];

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featureItems = leftRef.current?.querySelectorAll('.feature-item');
      const windows = rightRef.current?.querySelectorAll('.app-window');

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
      const ecoHeading = leftRef.current?.querySelector('.ecosystem-heading');
      if (ecoHeading) {
        scrollTl.fromTo(
          ecoHeading,
          { x: '-18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }

      if (featureItems && featureItems.length > 0) {
        scrollTl.fromTo(
          Array.from(featureItems),
          { x: '-12vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.05
        );
      }

      if (panelRef.current) {
        scrollTl.fromTo(
          panelRef.current,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }

      if (windows && windows.length > 0) {
        scrollTl.fromTo(
          Array.from(windows),
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.02, ease: 'none' },
          0.1
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content */}
          <div
            ref={leftRef}
            className="px-4 sm:px-6 lg:px-10 py-16 lg:py-0 flex flex-col justify-center"
          >
            <span className="ecosystem-heading inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6 w-fit">
              💻 What We Built
            </span>

            <h2 className="ecosystem-heading font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
              Everything campus life actually needs,{' '}
              <span className="italic">under one</span> roof.
            </h2>

            <p className="ecosystem-heading text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              A full ecosystem, not a single feature with a fintech wrapper. Each
              module solves a real campus problem you've already lived through
              this semester.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.num}
                  className="feature-item flex items-center gap-3 group cursor-pointer"
                >
                  <span className="text-lg font-display text-text-primary/30 group-hover:text-green-accent transition-colors">
                    {feature.num}
                  </span>
                  <div className="flex items-center gap-2 px-3 py-2 bg-cream/60 border border-text-primary/10 rounded-lg group-hover:bg-cream group-hover:border-text-primary/30 transition-all">
                    <feature.icon className="w-4 h-4 text-text-primary/60" />
                    <span className="text-sm font-medium text-text-primary">
                      {feature.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/marketplace" className="btn-primary w-fit">
              Get Started
            </Link>
          </div>

          {/* Right Collage Panel */}
          <div ref={rightRef} className="relative min-h-[50vh] lg:min-h-[100dvh]">
            <div
              ref={panelRef}
              className="absolute inset-0 bg-lavender border-l-2 border-text-primary"
            />

            {/* App Windows */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-[4/3]">
                {/* Main Window */}
                <div className="app-window absolute inset-[10%] bg-white/80 backdrop-blur-sm border-2 border-text-primary rounded-2xl shadow-sticky animate-float overflow-hidden" style={{ animationDelay: '0s' }}>
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-blue-bg/40 rounded-lg p-3">
                      <p className="text-xs font-semibold text-text-primary mb-2">Campus Marketplace</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-cream rounded p-2 text-[10px]">Laptop · ₦250K</div>
                        <div className="bg-cream rounded p-2 text-[10px]">Books · ₦5K</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Runner Window */}
                <div className="app-window absolute left-[-5%] top-[25%] w-[40%] bg-[#A8E6CF] border-2 border-text-primary rounded-xl shadow-sticky animate-float p-3" style={{ animationDelay: '0.7s' }}>
                  <Bike className="w-5 h-5 mb-1" />
                  <p className="text-[10px] font-bold">Runner</p>
                  <p className="text-[9px] opacity-70">0.4km away</p>
                </div>

                {/* Bid Window */}
                <div className="app-window absolute right-[-5%] bottom-[15%] w-[45%] bg-cream border-2 border-text-primary rounded-xl shadow-sticky animate-float p-3" style={{ animationDelay: '1.2s' }}>
                  <p className="text-[10px] font-bold text-green-accent">NEW BID</p>
                  <p className="text-xs font-semibold">AirPods Pro</p>
                  <p className="text-sm font-bold">₦75,000 · 5 bids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
