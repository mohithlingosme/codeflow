import React from 'react';
import { SidebarConfig, iconMap } from './SidebarConfig.tsx';
import NavItem from './NavItem.tsx';
import { Card } from "./ui/card.tsx"

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  const handleNavigation = (view: string) => {
    onNavigate(view);
  };

  return (
    <aside className="w-64 bg-surface/90 backdrop-blur-xl border-r border-white/10 flex flex-col">
      <Card className="mb-8 p-4">
        <h1 className="text-2xl font-bold text-text">DevCore AI</h1>
      </Card>
      <nav>
        <ul>
          {SidebarConfig.map((item) => {
            const Icon = iconMap[item.name] || null;
            return (
              <NavItem
                key={item.name}
                item={item}
                onClick={() => handleNavigation(item.name)}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
