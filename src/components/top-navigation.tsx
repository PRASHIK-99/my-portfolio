'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu } from '@/components/navigation-menu';
import { siteConfig } from '@/config/site';
import { ThemeSwitcher } from '@/components/theme-switcher';

interface TopNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function TopNavigation({ activeSection, setActiveSection }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="flex items-center space-x-2" onClick={() => setActiveSection('home')}>
          <UserCircle className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">{siteConfig.name.split(' ')[0]}'s Portfolio</span>
           <span className="font-bold text-lg sm:hidden">PDM</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <NavigationMenu
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          
          <ThemeSwitcher />
          
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 pt-6">
                <NavigationMenu
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                  isMobile={true}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
