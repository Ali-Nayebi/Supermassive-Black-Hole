import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';

function Master() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default Master;
