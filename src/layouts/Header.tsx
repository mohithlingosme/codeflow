import React from 'react';
import Logo from './header/Logo.tsx';
import NavLinks from './header/NavLinks.tsx';
import ProfileMenu from './header/ProfileMenu.tsx';
import ThemeToggle from './header/ThemeToggle.tsx';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-white/10 flex justify-between p-4">
      
        <Logo />
        <NavLinks />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ProfileMenu />
        </div>
      
    </header>
  );
};

export default Header;
