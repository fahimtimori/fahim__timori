import { ExternalLink } from "lucide-react"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { formatDateShort } from "@/lib/utils"

export const metadata = {
  title: "Fahim Timori - Web Developer & SEO Specialist",
  description: "Professional portfolio showcasing WordPress, Shopify, and Magento development expertise",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <section id="projects" className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          <div className="space-y-12">
            {/* Experience Items */}
            {[
              {
                title: "Shopify Web Developer",
                company: "ValueTools",
                startDate: "2025-12-07",
                endDate: "Present",
                website: "https://valuetools.co",
                email: "info@valuetools.co",
                description: [
                  "Development and customization of Shopify storefront",
                  "Product listing optimization and UI improvements",
                  "Performance and conversion-focused layout design",
                ],
              },
              {
                title: "WordPress Developer & SEO Specialist",
                company: "Faribanawa",
                startDate: "2025-11-10",
                endDate: "2026-01-03",
                website: "https://faribanawa.com",
                email: "",
                description: [
                  "Custom WordPress theme development",
                  "On-page SEO optimization and technical SEO setup",
                  "Content structure and performance tuning",
                ],
              },
              {
                title: "WordPress Developer",
                company: "Manzoorify",
                startDate: "2022-01-01",
                endDate: "Present",
                website: "https://www.manzoorify.com",
                email: "fahimtimori110@gmail.com",
                description: [
                  "Website development and maintenance",
                  "Plugin integration and UI enhancements",
                  "Speed optimization and responsive design",
                ],
              },
              {
                title: "Shopify Web Developer",
                company: "Supplement Corner",
                startDate: "2025-07-01",
                endDate: "Present",
                website: "https://supplementcorner.com",
                email: "supplementcorner6@gmail.com",
                description: [
                  "Shopify store setup and customization",
                  "Product page optimization",
                  "SEO-friendly structure and content handling",
                ],
              },
              {
                title: "Shopify SEO & Content Specialist",
                company: "CalVitamin",
                startDate: "2025-04-01",
                endDate: "Present",
                website: "https://calvitamin.com",
                email: "info@calvitamin.com",
                description: [
                  "SEO-optimized product content creation",
                  "Blog content strategy and internal linking",
                  "On-page SEO, schema, and UX optimization",
                ],
              },
              {
                title: "Magento SEO & Content Specialist",
                company: "Supplemynts",
                startDate: "2024-09-01",
                endDate: "2025-03-31",
                website: "https://supplemynts.com",
                email: "info@supplemynts.com",
                description: [
                  "Magento product SEO optimization",
                  "Content creation for product pages and blogs",
                  "Technical SEO implementation and structure optimization",
                ],
              },
              {
                title: "WordPress Website Developer & SEO Manager",
                company: "Aria Apollo",
                startDate: "2024-01-01",
                endDate: "Present",
                website: "https://aah.af",
                email: "",
                description: [
                  "Full website development and management",
                  "SEO strategy implementation",
                  "Content management and performance optimization",
                ],
              },
            ].map((job, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                <p className="text-lg font-medium text-foreground mb-2">{job.company}</p>
                { (job.startDate || job.endDate) && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.startDate ? formatDateShort(job.startDate) : ""}
                    {job.startDate && job.endDate ? " – " : ""}
                    {job.endDate ? formatDateShort(job.endDate) : ""}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  {job.website && (
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      {job.website.replace("https://", "")}
                    </a>
                  )}
                  {job.email && <span>📧 {job.email}</span>}
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"],
              },
              {
                category: "E-Commerce Development",
                skills: [
                  "Shopify Store Setup & Customization",
                  "Shopify Theme Customization",
                  "Product Page Optimization",
                  "Checkout & UX Optimization",
                  "Conversion-Focused Layout Design",
                  "Store Performance Optimization",
                ],
              },
              {
                category: "WordPress Development",
                skills: [
                  "WordPress Theme Customization",
                  "Plugin Integration & Configuration",
                  "Website Maintenance & Security",
                  "Speed Optimization",
                  "Content Management (CMS)",
                  "Website Redesign & Re-Organization",
                ],
              },
              {
                category: "SEO & Optimization",
                skills: [
                  "On-Page SEO",
                  "Technical SEO",
                  "Product SEO Optimization",
                  "Blog SEO & Content Structuring",
                  "Internal Linking Strategy",
                  "Schema Markup",
                  "Keyword Research & SEO Strategy",
                ],
              },
              {
                category: "Content & Marketing",
                skills: [
                  "Product Description Writing (SEO-Optimized)",
                  "Blog Content Creation",
                  "Category Page Content Optimization",
                  "E-Commerce Content Strategy",
                  "Brand-Oriented Content Structuring",
                ],
              },
              {
                category: "Tools & Platforms",
                skills: [
                  "Shopify",
                  "WordPress",
                  "Magento",
                  "Google Search Console",
                  "SEO Tools",
                  "Email Marketing Integration",
                ],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <h3 className="text-lg font-semibold text-primary mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Team Experience</h2>
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold mb-4">E-Commerce & Digital Marketing Team</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <p>
                <strong>Team Lead:</strong> Fahim Timori – fahimtimori110@gmail.com
              </p>
              <p>
                <strong>Project Owner:</strong> Naeem Azizian – azizian@berkeley.edu
              </p>
              <p>
                <strong>Project Coordinator:</strong> Wahid Atif – wahidatef@gmail.com
              </p>
            </div>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Part of a 4-member digital marketing team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>E-commerce content creation and optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>SEO strategy, product positioning, and growth support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Experience Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12">Additional Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "English Instructor",
                description:
                  "Teaching English language and communication skills, student mentoring and curriculum support",
              },
              {
                title: "Accountant",
                description: "Financial records management and basic accounting operations and reporting",
              },
              {
                title: "Receptionist",
                description: "Front desk operations, client coordination and administrative support",
              },
            ].map((exp, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-3">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "High School Diploma",
                school: "Herat, Afghanistan",
                period: "2017 – 2019",
              },
              {
                degree: "Bachelor of Computer Science (Database Focus)",
                school: "Herat University – Faculty of Computer Science",
                period: "2020 – 2024",
                details: ["Major: Computer Science", "Focus: Databases, Information Systems, Software Fundamentals"],
              },
              {
                degree: "TOEFL iBT",
                school: "English Proficiency Test",
                period: "2025",
                score: "Score: 98",
                details: ["Strong command in Reading, Listening, Speaking, and Writing"],
              },
            ].map((edu, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                {edu.score && <p className="text-primary font-medium mb-3">{edu.score}</p>}
                {edu.details && (
                  <ul className="space-y-1">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2026 Fahim Timori. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="mailto:fahimtimori110@gmail.com"
              className="text-muted-foreground hover:text-primary transition text-sm"
            >
              Email
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
