import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream border-t-2 border-text-primary relative">
      <div className="grunge-overlay" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-text-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-sm">K</span>
              </div>
              <span className="font-display text-xl text-text-primary">
                KampusVillage
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-4 max-w-xs">
              Nigeria's verified campus marketplace · Escrow on every trade ·
              Student-only.
            </p>
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Oduduwa Estate, Olubuse Street, Ede Road, Ile-Ife, Osun State
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>09167166956</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              {['Instagram', 'Facebook', 'X', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors underline underline-offset-2"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-xs text-text-secondary/70 mt-2">
              @kampusvillage
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Marketplace
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Buy & Sell', to: '/marketplace' },
                { label: 'Vendor Shops', to: '/marketplace' },
                { label: 'PDF Books', to: '/marketplace' },
                { label: 'Referral Challenge', to: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Campus Runners',
                'Post an Errand',
                'Campus Artisans',
                'Roommate Match',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/marketplace"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'KampusWallet', to: '/kampuswallet' },
                { label: 'Contact', to: '#' },
                { label: 'FAQs', to: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-xs text-text-secondary/60">Legal</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Escrow Policy'].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-xs text-text-secondary/50 hover:text-text-secondary cursor-pointer transition-colors"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-text-primary/10">
          <p className="text-xs text-text-secondary/60 text-center">
            © 2026 KampusVillage Technologies Ltd · Built for students, by
            students.
          </p>
        </div>
      </div>
    </footer>
  );
}
