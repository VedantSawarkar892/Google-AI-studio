import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgeGate from './components/AgeGate';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import StoreLocator from './pages/StoreLocator';
import { PRODUCTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isAdult, setIsAdult] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (verified) {
        setIsAdult(true);
    }
    setHasChecked(true);
  }, []);

  if (!hasChecked) return null;

  return (
    <Router>
      <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {!isAdult && <AgeGate onVerify={() => setIsAdult(true)} />}
        </AnimatePresence>

        <Navbar />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locator" element={<StoreLocator />} />
            
            {/* Dynamic Product Routes */}
            {PRODUCTS.map((prod) => (
              <Route 
                key={prod.id} 
                path={prod.path} 
                element={<ProductPage 
                    title={prod.title} 
                    desc={prod.description} 
                    img={prod.image} 
                    accent={prod.accent} 
                />} 
              />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;