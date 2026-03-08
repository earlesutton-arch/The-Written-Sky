import { useState, useEffect } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Poems from './pages/Poems';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
