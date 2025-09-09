import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDonate from './components/FloatingDonate';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import GetInvolved from './pages/GetInvolved';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-paper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/work" element={<Work />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDonate />
      </div>
    </Router>
  );
}

export default App;