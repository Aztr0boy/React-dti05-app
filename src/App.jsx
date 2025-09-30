import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Contract from './pages/Contract';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contract' element={<Contract />} />
      </Routes>
    </BrowserRouter>
  );
}