//import React from 'react';
import { Home } from "./pages/Home";
import  Navbar from './components/Navbar';
import "./App.css";
import NavegacionAdopcion from "./components/navBar2.jsx";
import { Footer } from "../src/pages/Footer.jsx"
import BasicGrid from "../src/components/BasicGrid.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    
    <Router>
      <div className="App bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533738630286-f1f4a61705f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D')` }}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<BasicGrid />} />
          </Routes>
        <Footer />
  </div>

    </Router>

  );
};