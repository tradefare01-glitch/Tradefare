import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Zap, Truck, Store, Wrench, Bike } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { id: 'listings', label: 'Listings', icon: ShoppingBag },
  { id: 'live', label: 'Live', icon: Zap },
  { id: 'errands', label: 'Errands', icon: Truck },
  { id: 'vendors', label: 'Vendors', icon: Store },
  { id: 'artisans', label: 'Artisans', icon: Wrench },
  { id: 'runners', label: 'Runners', icon: Bike },
];

const products = [
  {
    id: 1,
    name: 'MacBook Air M2',
    condition: 'Excellent Condition',
    price: '₦780K',
    image: '/product_macbook.jpg',
  },
  {
    id: 2,
    name: 'Portable Power Bank',
    condition: 'Good Condition',
    price: '₦18K',
    image: '/product_powerbank.jpg',
  },
  {
    id: 3,
    name: 'Mini Refrigerator',
    condition: 'Excellent Condition',
    price: '₦85K',
    image: '/product_fridge.jpg',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    condition: 'Good Condition',
    price: '₦45K',
    image: '/product_headphones.jpg',
  },
  {
    id: 5,
    name: 'Engineering Textbooks',
    condition: '200L Set',
    price: '₦14.5K',
    image: '/product_textbooks.jpg',
  },
];

export default function MarketplacePreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('listings');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.section-heading');
      const tabRow = sectionRef.current?.querySelector('.tab-row');
      const cards = sectionRef.current?.querySelectorAll('.product-card');

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

      if (tabRow) {
        gsap.fromTo(
          tabRow.children,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            scrollTrigger: {
              trigger: tabRow,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (cards) {
        gsap.fromTo(
          cards,
          { y: 28, opacity: 0 },
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
        <div className="section-heading text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary">
            The marketplace your campus{' '}
            <span className="italic">already trusts.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="tab-row flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-text-primary text-white border-text-primary'
                  : 'bg-transparent text-text-primary border-text-primary hover:bg-text-primary/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card card-cream rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-green-accent/10 text-green-accent rounded-full mb-1.5">
                  {product.condition}
                </span>
                <h3 className="font-semibold text-sm text-text-primary truncate">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-text-primary mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-green-accent transition-colors underline underline-offset-4"
          >
            Explore Marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
