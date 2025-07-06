
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/projects' && location.pathname.startsWith('/projects/'));

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`nav-link relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 ${isActive ? 'text-black dark:text-white font-semibold' : 'font-normal'}`}
    >
      {children}
      {isActive && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-accent-purple rounded-full"></span>}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-purple/70 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
            Nikhil Goyal
          </Link>
          <nav className="hidden md:flex flex-grow justify-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center">
            <button 
              onClick={toggleTheme} 
              className="mr-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <i className="ri-sun-line text-2xl"></i> : <i className="ri-moon-line text-2xl"></i>}
            </button>
            <button className="md:hidden text-zinc-900 dark:text-white" onClick={toggleMobileMenu} aria-label="Open menu">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900/95 border-t border-gray-200 dark:border-white/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
