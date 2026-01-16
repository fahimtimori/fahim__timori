"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { personalInfo, socialLinks } from "@/lib/site-data"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const surfaceClass = useMemo(
    () => "glass-surface border border-border/60 backdrop-blur-2xl",
    [],
  )

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <nav
          className={`pointer-events-auto relative flex items-center justify-between gap-6 rounded-2xl px-6 py-4 text-xs font-medium ${
            scrolled ? `${surfaceClass} accent-ring` : surfaceClass
          }`}
        >
          <Link
            href="#"
            className="inline-flex items-center text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="surface-muted rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-foreground/70">
              {personalInfo.shortName}
            </span>
          </Link>
          <ul className="flex flex-wrap gap-4 text-[12px]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="glow-underline relative inline-flex items-center gap-1 rounded-full px-3 py-1 text-foreground/80 transition duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
