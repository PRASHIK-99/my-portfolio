'use client';

import HomeSection from '@/components/sections/home';
import EducationSection from '@/components/sections/education';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import AchievementsSection from '@/components/sections/achievements';
import PublicationsSection from '@/components/sections/publications';
import ConnectSection from '@/components/sections/connect';

interface PortfolioContentProps {
  activeSection: string;
}

const PortfolioContent = ({ activeSection }: PortfolioContentProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'education':
        return <EducationSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'publications':
        return <PublicationsSection />;
      case 'connect':
        return <ConnectSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div key={activeSection} className="flex-1 animate-section-enter">
      {renderSection()}
    </div>
  );
};

export default PortfolioContent;
