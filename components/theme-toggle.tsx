"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition" aria-label="Toggle theme">
      {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
    </button>
  )
}
