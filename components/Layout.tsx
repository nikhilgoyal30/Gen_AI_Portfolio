
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Particles = () => (
  <div className="fixed top-0 left-0 w-full h-full">
    <div className="stars"></div>
    <div className="twinkling"></div>
  </div>
);


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-purple text-gray-800 dark:text-gray-200 relative">
      {theme === 'dark' && <Particles />}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
