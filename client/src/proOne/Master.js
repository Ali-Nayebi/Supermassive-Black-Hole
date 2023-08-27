import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './scenes/global/Navbar';
import Home from './scenes/home/Home';
import CartMenu from './scenes/global/CartMenu';
import Footer from './scenes/global/Footer';
import './master.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Master() {
  return (
    <div className="appp">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <CartMenu />
      <Footer />
    </div>
  );
}

export default Master;
