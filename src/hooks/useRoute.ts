import { useEffect, useState } from 'react'

const read = () => {
  const m = window.location.hash.match(/^#\/gun\/([\w-]+)/)
  return m ? m[1] : null
}

export default function useRoute() {
  const [gunId, setGunId] = useState<string | null>(read)

  useEffect(() => {
    const onHash = () => setGunId(read())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (gunId) {
      window.scrollTo(0, 0)
      return
    }
    const target = window.location.hash.slice(1)
    requestAnimationFrame(() => {
      const el = target ? document.getElementById(target) : null
      if (el) el.scrollIntoView()
    })
  }, [gunId])

  return gunId
}
