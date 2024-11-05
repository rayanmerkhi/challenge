import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Region from './pages/Region';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/region/:id" element={<Region />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;