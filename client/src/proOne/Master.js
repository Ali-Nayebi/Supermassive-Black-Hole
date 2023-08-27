import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './scenes/global/Navbar';
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
    </div>
  );
}

export default Master;
