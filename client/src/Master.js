import { Route, Routes } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import ProOne from './proOne/ProOne';

function Master() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/1" element={<ProOne />} />
      </Routes>
    </div>
  );
}

export default Master;
