import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const read = (): Theme => {
  const set = document.documentElement.dataset.theme
  return set === 'light' ? 'light' : 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(read)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('sb-theme', theme)
    } catch {
      return
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return [theme, toggle] as const
}
