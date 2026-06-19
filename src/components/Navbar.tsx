import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b-2 border-text-primary'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-text-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-display text-sm">K</span>
            </div>
            <span className="font-display text-lg lg:text-xl text-text-primary">
              KampusVillage
            </span>
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/marketplace"
              className={`text-sm font-medium transition-colors hover:text-green-accent ${
                location.pathname === '/marketplace'
                  ? 'text-green-accent'
                  : 'text-text-primary'
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/kampuswallet"
              className={`text-sm font-medium transition-colors hover:text-green-accent ${
                location.pathname === '/kampuswallet'
                  ? 'text-green-accent'
                  : 'text-text-primary'
              }`}
            >
              KampusWallet
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-green-accent ${
                location.pathname === '/about'
                  ? 'text-green-accent'
                  : 'text-text-primary'
              }`}
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-text-primary/5 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-text-primary" />
            </button>
            <Link
              to="#"
              className="hidden sm:flex items-center gap-2 px-4 py-2 border-2 border-text-primary rounded-full text-sm font-medium hover:bg-text-primary hover:text-white transition-all"
            >
              Sign in
              <span className="text-lg">→</span>
            </Link>
            <button
              className="md:hidden p-2 hover:bg-text-primary/5 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b-2 border-text-primary">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/marketplace"
              className="block px-4 py-3 text-text-primary font-medium hover:bg-blue-bg rounded-lg transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/kampuswallet"
              className="block px-4 py-3 text-text-primary font-medium hover:bg-blue-bg rounded-lg transition-colors"
            >
              KampusWallet
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-text-primary font-medium hover:bg-blue-bg rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              to="#"
              className="block px-4 py-3 text-center border-2 border-text-primary rounded-full text-sm font-medium"
            >
              Sign in →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
