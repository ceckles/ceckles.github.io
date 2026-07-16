// Icon grid data — grouped by category. `icon` keys map to the sprite in SkillsCloud.astro.
export const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Go', icon: 'go' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Spring Boot', icon: 'spring' },
    ],
  },
  {
    category: 'Tools & Deploy',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Docker', icon: 'docker' },
    ],
  },
];

export const stats = [
  { label: 'Public Repos', value: '32' },
  { label: 'GitHub Followers', value: '12' },
  // TODO: fill in your real years of experience
  { label: 'Years Building', value: 'X+' },
  { label: 'Languages Explored', value: '5' },
];
