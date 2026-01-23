import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAge(dob: string | Date) {
  const birthDate = typeof dob === "string" ? new Date(dob) : dob
  if (Number.isNaN(birthDate.getTime())) return 0

  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    years -= 1
  }

  return Math.max(0, years)
}

export function formatDateShort(dateStr?: string) {
  if (!dateStr) return ""
  if (dateStr.toLowerCase?.() === "present") return "Present"

  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr

  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(d)
  const day = d.getDate()
  const year = d.getFullYear()

  return `${month} ${day}, ${year}`
}
