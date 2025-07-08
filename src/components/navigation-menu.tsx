'use client';

import type { NavItem } from '@/types';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationMenuProps {
  onNavigate?: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile?: boolean; // To conditionally apply styles for mobile sheet
}

export function NavigationMenu({ onNavigate, activeSection, setActiveSection, isMobile = false }: NavigationMenuProps) {
  const router = useRouter();

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    router.push(`#${id}`);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav className={cn("flex", isMobile ? "flex-col space-y-2 p-4" : "items-center space-x-1 md:space-x-2")}>
      {siteConfig.navItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "secondary" : "ghost"}
          onClick={() => handleNavigation(item.id)}
          className={cn(
            "justify-start w-full text-sm",
            !isMobile && "px-3 py-2 md:px-4",
            isMobile && "text-left h-10" 
          )}
        >
          <item.icon className={cn("h-5 w-5", !isMobile && "md:mr-2")} />
          <span className={cn(isMobile ? "ml-3" : "hidden md:inline")}>{item.title}</span>
        </Button>
      ))}
    </nav>
  );
}
