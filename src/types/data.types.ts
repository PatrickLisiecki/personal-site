export interface NavItem {
  title: string;
  link: string;
}
export type NavData = NavItem[];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  mode: string;
  time: string;
  description: string;
  img: string;
}
export type ExperienceData = ExperienceItem[];

export type ProjectType = 'all' | 'web' | 'os' | 'games';

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  demo?: string;
  img: string;
  tech: string[];
  type: ProjectType;
}
export type ProjectsData = ProjectItem[];

export interface SkillItem {
  title: string;
  type: string;
  img: string;
  link: string;
}
export type SkillsData = SkillItem[];
