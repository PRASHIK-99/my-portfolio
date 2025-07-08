'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioContent from '@/components/portfolio-content';
import TopNavigation from '@/components/top-navigation';
import { siteConfig } from '@/config/site';

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>(siteConfig.navItems[0].id);
  const router = useRouter();

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.substring(1);
    const validSection = siteConfig.navItems.find(item => item.id === hash);
    if (validSection) {
      setActiveSection(hash);
    } else if (hash === '') {
      const defaultSectionId = siteConfig.navItems[0].id;
      setActiveSection(defaultSectionId);
      router.replace(`#${defaultSectionId}`, { scroll: false });
    }
  }, [router]);

  useEffect(() => {
    handleHashChange(); // Initial check
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  useEffect(() => {
    // Ensure URL hash matches activeSection, but only if it's a valid section
    // to prevent unnecessary router.replace calls on initial load if hash is empty.
    if (siteConfig.navItems.some(item => item.id === activeSection) && window.location.hash.substring(1) !== activeSection) {
      router.replace(`#${activeSection}`, { scroll: false });
    }
  }, [activeSection, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1">
        <PortfolioContent activeSection={activeSection} />
      </main>
    </div>
  );
}
