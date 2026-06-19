import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [calcTab, setCalcTab] = useState<'products' | 'errands'>('products');
  const [amount, setAmount] = useState('');

  const fee = amount
    ? calcTab === 'products'
      ? Math.min(Math.max(parseFloat(amount) * 0.01, 0), 5000)
      : Math.min(Math.max(parseFloat(amount) * 0.01, 0), 5000)
    : null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.section-heading');
      const cards = sectionRef.current?.querySelectorAll('.pricing-card');
      const calc = sectionRef.current?.querySelector('.calculator');

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

      if (calc) {
        gsap.fromTo(
          calc,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: calc,
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
    <section ref={sectionRef} className="relative bg-lavender py-16 lg:py-24">
      <div className="grunge-overlay" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="section-heading text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-text-primary" />
            <span className="text-sm font-semibold text-text-primary">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-2">
            Fair fees. Zero surprises.
          </h2>
          <p className="text-text-secondary text-sm max-w-lg mx-auto">
            You see exactly what you pay before you confirm. No hidden charges, no monthly fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="pricing-card card-cream rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-text-primary">
                Products & Orders
              </h3>
              <span className="text-xs font-semibold bg-green-accent/10 text-green-accent px-2 py-1 rounded-full">
                Vendor items, marketplace products, bid purchases
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-display text-text-primary">
                ₦0+
              </span>
              <span className="text-2xl font-display text-green-accent">
                1%
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              Anything under ₦1,000 costs nothing. No fine print.
            </p>
          </div>

          <div className="pricing-card card-cream rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-text-primary">
                Errands & Artisans
              </h3>
              <span className="text-xs font-semibold bg-green-accent/10 text-green-accent px-2 py-1 rounded-full">
                Campus errands, artisan bookings, labour services
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-display text-text-primary">
                ₦0+
              </span>
              <span className="text-2xl font-display text-green-accent">
                1%
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              For purchase errands, the fee applies to the runner service charge, not your shopping budget.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div className="calculator max-w-xl mx-auto">
          <div className="bg-text-primary rounded-2xl p-6 lg:p-8 text-white">
            <p className="text-sm font-semibold mb-4 text-white/70">
              Fee calculator — Type an amount and your exact fee appears below
            </p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setCalcTab('products')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  calcTab === 'products'
                    ? 'bg-yellow-accent text-text-primary'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Products & Orders
              </button>
              <button
                onClick={() => setCalcTab('errands')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  calcTab === 'errands'
                    ? 'bg-yellow-accent text-text-primary'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Errands & Services
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-display text-white/50">
                ₦
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter an amount to see your fee"
                className="w-full pl-10 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/40 text-lg font-medium focus:outline-none focus:border-yellow-accent transition-colors"
              />
            </div>

            {/* Result */}
            {fee !== null && (
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Platform fee</span>
                <span className="text-2xl font-display text-yellow-accent">
                  ₦{fee.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                </span>
              </div>
            )}

            <p className="text-xs text-white/40 mt-4">
              Fees apply only when a transaction completes. No listing fees. No
              monthly charges. Rates shown match the current schedule set by our
              team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
