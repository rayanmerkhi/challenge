import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Region from './pages/Region';
import Auth from './pages/Auth';
import Teach from './pages/Teach';
import About from './pages/About'
import Region_apprenti from './pages/Region_apprenti';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/in/:id" element={<Home />} />
            <Route path="/region/:id" element={<Region />} />
            <Route path="/region_apprenti/:id" element={<Region_apprenti />} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/teach" element={<Teach />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;