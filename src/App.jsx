import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EarthPage from './components/EarthPage';
import JupiterPage from './components/JupiterPage';
import MarsPage from './components/MarsPage';
import MercuryPage from './components/MercuryPage';
import NeptunePage from './components/NeptunePage';
import SaturnPage from './components/SaturnPage';
import UranusPage from './components/UranusPage';
import VenusPage from './components/VenusPage';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/earth" element={<EarthPage />} />
      <Route path="/jupiter" element={<JupiterPage />} />
      <Route path="/mars" element={<MarsPage />} />
      <Route path="/mercury" element={<MercuryPage />} />
      <Route path="/neptune" element={<NeptunePage />} />
      <Route path="/saturn" element={<SaturnPage />} />
      <Route path="/uranus" element={<UranusPage />} />
      <Route path="/venus" element={<VenusPage />} />
      </Routes>
    </Router>
  );
}

export default App
