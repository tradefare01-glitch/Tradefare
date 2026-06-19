import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Wallet,
  ShieldCheck,
  Clock,
  ArrowRight,
  CreditCard,
  Smartphone,
  Receipt,
  Banknote,
} from 'lucide-react';

const stats = [
  {
    value: '₦0',
    label: 'Fees to fund',
    desc: 'Top up via bank transfer, card, or USSD — no charge.',
    icon: CreditCard,
  },
  {
    value: '5%',
    label: 'Platform service fee',
    desc: 'Under ₦1,000 is always free. Tiered by order value, capped at ₦5,000.',
    icon: Receipt,
  },
  {
    value: '24 hrs',
    label: 'Dispute turnaround',
    desc: 'We reply, human-to-human.',
    icon: Clock,
  },
];

const steps = [
  {
    icon: Banknote,
    title: 'You pay',
    desc: 'Money goes into escrow, not to the seller yet.',
  },
  {
    icon: Smartphone,
    title: 'They deliver',
    desc: 'They deliver / ship / cut your hair / run your errand.',
  },
  {
    icon: ShieldCheck,
    title: 'You confirm',
    desc: 'You tap "confirm", money releases to their wallet, same second.',
  },
];

export default function KampusWallet() {
  return (
    <div className="min-h-[100dvh] bg-blue-bg">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-text-primary pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/wallet_hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-16 lg:py-24 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Wallet</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            The campus{' '}
            <span className="text-green-accent italic">digital wallet.</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Escrow-backed student payments. Fund it once, pay anyone on campus,
            get paid instantly when you deliver. No NIP, no OTP drama, no
            waiting days.
          </p>

          <Link
            to="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-accent text-white rounded-full text-sm font-semibold hover:bg-green-accent/90 transition-colors"
          >
            <Wallet className="w-4 h-4" />
            Get Started
          </Link>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        {/* Dashboard Preview */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <img
            src="/wallet_dashboard.jpg"
            alt="KampusWallet Dashboard"
            className="w-full rounded-2xl border-2 border-text-primary shadow-sticky"
          />
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-cream border-2 border-text-primary rounded-lg flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-text-primary">
              How it Works
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-4">
            Money moves only,{' '}
            <span className="text-green-accent italic">when you do.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-cream border-2 border-text-primary shadow-card rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-lavender border-2 border-text-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-cream border-2 border-text-primary rounded-xl p-4 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-green-accent shrink-0" />
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">Dispute?</strong> Our team
              mediates within 24 hrs. Refunds are automatic if you win.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-cream border-2 border-text-primary shadow-card rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-6 h-6 text-text-primary/60" />
                <span className="text-3xl lg:text-4xl font-display text-text-primary">
                  {stat.value}
                </span>
              </div>
              <h3 className="font-bold text-sm text-text-primary mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-text-secondary">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/marketplace"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
