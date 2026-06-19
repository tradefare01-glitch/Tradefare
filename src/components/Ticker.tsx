import { Shield, Zap, Lock, BadgeCheck, Ban } from 'lucide-react';

const items = [
  { icon: Shield, label: 'ESCROW PROTECTED' },
  { icon: Zap, label: 'INSTANT PAYOUTS' },
  { icon: Lock, label: 'NO HIDDEN FEES' },
  { icon: Lock, label: 'BANK-GRADE PRIVACY' },
  { icon: BadgeCheck, label: 'STUDENT VERIFIED' },
  { icon: Ban, label: 'ZERO SCAMS' },
];

export default function Ticker() {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-yellow-accent border-y-2 border-text-primary overflow-hidden py-3 lg:py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 lg:px-8 shrink-0"
          >
            <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-text-primary" />
            <span className="text-sm lg:text-base font-bold text-text-primary tracking-wide">
              {item.label}
            </span>
            <span className="text-text-primary/40 ml-2">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
