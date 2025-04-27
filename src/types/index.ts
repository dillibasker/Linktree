export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  delay: number;
}

export interface Theme {
  id: 'light' | 'dark';
  label: string;
  icon: string;
}