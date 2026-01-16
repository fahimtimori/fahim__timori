export type MetricCard = {
  label: string
  value: string
  helper: string
}

export type SocialLink = {
  label: string
  href: string
}

export type ProductionSite = {
  name: string
  url: string
}

export const personalInfo = {
  name: "Fahim Timori",
  shortName: "Fahim Timori",
  title: "Web Developer & SEO Specialist",
  location: "Herat, Afghanistan",
  // TODO: Replace with your actual DOB (YYYY-MM-DD) to show an accurate age.
  dob: "2001-01-01",
  summary:
    "Experienced in building, optimizing, and managing high-conversion e-commerce stores across Shopify, WordPress, and Magento. Specialized in SEO-driven content, performance optimization, and scalable web solutions.",
  availability: {
    status: "Available for work",
    responseTime: "Typically responds within 24 hours",
  },
  githubProfiles: [] as Array<{ username: string; url: string }>,
  metrics: [
    {
      label: "Platforms",
      value: "Shopify / WP",
      helper: "Storefronts, themes, and performance",
    },
    {
      label: "SEO",
      value: "Technical + On-page",
      helper: "Schema, content structure, and growth",
    },
     {
      label: "Experience",
      value: "3 Years",
      helper: "CMS and frontend",
    },
  ] satisfies MetricCard[],
} as const

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:fahimtimori110@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
]

export const productionSites: ProductionSite[] = [
  { name: "ValueTools", url: "https://valuetools.co" },
  { name: "Faribanawa", url: "https://faribanawa.com" },
  { name: "Manzoorify", url: "https://www.manzoorify.com" },
  { name: "Supplement Corner", url: "https://supplementcorner.com" },
  { name: "CalVitamin", url: "https://calvitamin.com" },
  { name: "Supplemynts", url: "https://supplemynts.com" },
  { name: "Aria Apollo", url: "https://aah.af" },
]
