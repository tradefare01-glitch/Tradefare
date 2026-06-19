import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import KampusWallet from './pages/KampusWallet';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/kampuswallet" element={<KampusWallet />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
