import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';
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
      <CartMenu />
    </div>
  );
}

export default Master;
