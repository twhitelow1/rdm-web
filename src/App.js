import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home.js';
import Listing from './pages/Listing.js';
import "./styles/main.css";
import Navigation from './components/Util/Navigation';

function App() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarTransparent(window.scrollY <= 150);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation navbarTransparent={navbarTransparent} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
