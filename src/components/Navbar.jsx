import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contacto from '../pages/contacto';
    
    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
    <Link to="/" className="text-white font-bold text-xl">Bootcamp UDD</Link>
    <div className="md:hidden">
    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </button>
    </div>
    
            <div className="hidden md:flex space-x-4">
    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
    <Link to="/contacto" className="text-white hover:text-gray-300">Contacto</Link>
    </div>
    </div>
    
        {isOpen && (
    <div className="md:hidden">
    <Link to="/" className="block text-white py-2 px-4 hover:bg-gray-700">Home</Link>
    <Link to="/productos" className="block text-white py-2 px-4 hover:bg-gray-700">Contacto</Link>
    </div>
        )}
    </nav>
    );
    };
    
export default Navbar;
