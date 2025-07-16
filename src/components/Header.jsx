import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction and state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-[rgba(0,0,0,0.9)] ' : 'bg-transparent'
      } ${showHeader ? 'top-0' : '-top-[200px]'}`}
    >
      <div className="container mx-auto lg:px-[65px] px-[30px] py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="lg:w-[180px] w-[120px] h-auto">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[37px]">
            <ul className="flex gap-[37px] items-center text-white font-medium">
              <li><Link to="/home" className="hover:text-[#dabf70]">Home</Link></li>
              <li><Link to="/" className="hover:text-[#dabf70]">About</Link></li>
              <li><Link to="/" className="hover:text-[#dabf70]">Projects</Link></li>
              <li><Link to="/" className="hover:text-[#dabf70]">Contact</Link></li>
            </ul>
            <button className="bg-[#852438] px-[20px] py-[12px] rounded-[50px] hover:bg-[#DABF70] hover:shadow-xl hover:scale-102
  transition duration-300 ease-in-out text-white">
              Call Now
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#852438] rounded-[10px] p-4">
            <ul className="flex flex-col gap-4 text-white">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li>
                <button className="w-full mt-2 bg-[#dabf70] text-[#852438] py-2 rounded-[30px]">
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
