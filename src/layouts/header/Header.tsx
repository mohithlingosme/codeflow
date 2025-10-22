import React from "react";
import Logo from "./Logo.tsx";
import NavLinks from "./NavLinks.tsx";
import ThemeToggle from "./ThemeToggle.tsx";
import ProfileMenu from "./ProfileMenu.tsx";


const Header: React.FC = () => {
  return (
    <header className="header flex justify-between items-center shadow-sm">
      {/* Left Side → Logo + Navigation */}
      <div className="flex items-center gap-6">
        <Logo />
        <NavLinks />
      </div>

      {/* Right Side → Theme Toggle + Profile */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
