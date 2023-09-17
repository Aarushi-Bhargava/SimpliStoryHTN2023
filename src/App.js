import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import News from './pages/News';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
