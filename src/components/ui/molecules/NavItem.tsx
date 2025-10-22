import React from 'react';
import { cn } from "../../../lib/utils.ts"
import { Button } from "../atoms/Button.tsx"

interface NavItemProps {
  item: { name: string; };
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, active, onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={cn(
      "flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors w-full text-left justify-start",
      active
        ? "bg-primary/10 text-primary hover:bg-primary/20"
        : "text-text/60 hover:bg-primary/10 hover:text-text"
    )}
  >
    <span>{item.name}</span>
  </Button>
);

export default NavItem;
export type { NavItemProps };
