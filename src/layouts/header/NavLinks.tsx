import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
  name: string;
  path: string;
}

const NavLinks: NavLinkItem[] = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Projects", path: "/projects" },
  { name: "Tasks", path: "/tasks" },
  { name: "Bugs", path: "/bugs" }
];
  
const NavLinksComponent: React.FC = () => {
  return (
    <nav className="nav-links flex space-x-4">
      {NavLinks.map((link) => (
        <NavLink
          key={link.name}     
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? "text-brand-accent" : "text-brand-subtle hover:text-brand-text"} hover:text-accent transition`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinksComponent;
