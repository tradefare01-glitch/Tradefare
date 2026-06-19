import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Truck,
  Store,
  Wrench,
  Bike,
  ChevronDown,
  MapPin,
  Eye,
} from 'lucide-react';

const tabs = [
  { id: 'listings', label: 'Listings', icon: ShoppingBag },
  { id: 'errands', label: 'Errands', icon: Truck },
  { id: 'vendors', label: 'Vendors', icon: Store },
  { id: 'artisans', label: 'Artisans', icon: Wrench },
  { id: 'runners', label: 'Runners', icon: Bike },
];

const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Books & Stationery',
  'Fashion',
  'Furniture',
  'Kitchenware',
  'Appliances',
  'Sport & Fitness',
  'Groceries',
  'Others',
];

const listings = [
  {
    id: 1,
    title: 'NGO Registration Certificate',
    desc: 'Non-governmental organization like social club, mosques, churches and others',
    condition: 'excellent',
    price: '₦140K',
    location: 'FUNAAB',
    bids: 0,
    views: 2,
    image: '/product_macbook.jpg',
  },
  {
    id: 2,
    title: 'Company Registration Name',
    desc: 'Company registration name',
    condition: 'excellent',
    price: '₦70K',
    location: 'Abeokuta & Lagos',
    bids: 0,
    views: 0,
    image: '/product_powerbank.jpg',
  },
  {
    id: 3,
    title: 'Business Name Registration',
    desc: 'Business name registration',
    condition: 'excellent',
    price: '₦35K',
    location: 'From Abeokuta and lagos',
    bids: 0,
    views: 0,
    image: '/product_fridge.jpg',
  },
  {
    id: 4,
    title: 'Gold Jewelry Set',
    desc: 'Necklace, Bracelet, Ring, Earrings',
    condition: 'excellent',
    price: '₦2.5K',
    location: 'Camp Apakila Junction · FUNAAB',
    bids: 0,
    views: 2,
    image: '/product_headphones.jpg',
  },
  {
    id: 5,
    title: 'Feminelle Mild Intimate Wash',
    desc: 'Personal care product',
    condition: 'new',
    price: '₦3.5K',
    location: 'UI',
    bids: 0,
    views: 1,
    image: '/product_textbooks.jpg',
  },
  {
    id: 6,
    title: 'PS3 Super Slim',
    desc: '2 PADS || 7GAMES || WORKING PERFECTLY',
    condition: 'good',
    price: '₦45K',
    location: 'OAU',
    bids: 0,
    views: 3,
    image: '/product_macbook.jpg',
  },
];

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('listings');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-blue-bg">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-text-primary pt-20">
        <div className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Marketplace</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            The campus{' '}
            <span className="text-yellow-accent italic">marketplace.</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Sneakers, phones, mini-fridges, calculators, leftover ramen, anything
            your fellow student is ready to pass on. Every seller verified, every
            kobo escrowed.
          </p>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-10 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
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

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-primary/40" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2.5 bg-cream border-2 border-text-primary rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-accent"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-cream border-2 border-text-primary rounded-full text-sm font-medium hover:bg-cream/80 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Sort by: Newest First
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-text-primary text-white border-2 border-text-primary rounded-full text-sm font-medium hover:bg-text-primary/90 transition-colors">
              + List an Item
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-text-primary text-white border-text-primary'
                  : 'bg-transparent text-text-primary border-text-primary/30 hover:border-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings Count */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
          <span className="text-sm text-text-secondary">
            <strong className="text-text-primary">{listings.length}</strong>{' '}
            listing{listings.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {listings.map((item) => (
            <div
              key={item.id}
              className="card-cream rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-medium">
                  <Eye className="w-3 h-3" />
                  {item.views}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                      item.condition === 'excellent'
                        ? 'bg-green-accent/10 text-green-accent'
                        : item.condition === 'new'
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'bg-yellow-accent/30 text-text-primary'
                    }`}
                  >
                    {item.condition}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-text-secondary">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-text-primary mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-1 mb-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-text-primary">
                    {item.price}
                  </span>
                  <span className="text-xs text-text-secondary">
                    Bids: {String(item.bids).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
