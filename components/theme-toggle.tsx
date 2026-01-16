"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition" aria-label="Toggle theme">
      {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-700" />}
    </button>
  )
}
