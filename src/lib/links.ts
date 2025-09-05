// Centralized configuration for links - shared with main app
export const links = {
  // Applications
  app: 'https://app.bond.xyz',
  landing: 'https://bond.xyz', 
  docs: 'https://docs.bond.xyz',
  
  // Social & Community
  github: 'https://github.com/bond-team/bond-monorepo',
  discord: 'https://discord.gg/bond',
  twitter: 'https://twitter.com/bond_protocol'
} as const

// Type-safe way to get links
export type LinkCategory = keyof typeof links
