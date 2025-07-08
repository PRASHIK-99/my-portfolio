import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  logoUrl?: string; // Optional: URL for institution logo
  description?: string;
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon; // Optional: Icon for the skill
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  title: string;
  description: string[];
  technologies: string[];
  icon?: LucideIcon; // Optional: Icon for the project
}

export interface CertificateItem {
  name: string;
  link: string;
  issuer?: string;
  icon?: LucideIcon; // Optional: Icon for the certificate issuer or type
}

export interface PublicationItem {
  title: string;
  link: string;
  icon?: LucideIcon; // Optional: Icon for publication type
}
