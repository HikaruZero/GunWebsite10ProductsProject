import { useEffect } from 'react'
import { GUNS, peso } from '../data/guns'
import './CartDrawer.css'

type Props = {
  open: boolean
  ids: string[]
  onClose: () => void
  onRemove: (id: string) => void
  onAdd: (id: string) => void
}

export default function WishlistDrawer({ open, ids, onClose, onRemove, onAdd }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const guns = ids.map((id) => GUNS.find((g) => g.id === id)).filter((g) => g !== undefined)

  return (
    <div className="overlay" onClick={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Wishlist" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>Wishlist</h2>
          <button className="x" onClick={onClose} aria-label="Close wishlist">×</button>
        </header>
        {guns.length === 0 ? (
          <p className="empty">Tap the heart on any replica to save it here.</p>
        ) : (
          <ul className="lines">
            {guns.map((g) => (
              <li key={g.id}>
                <img src={g.photo} alt="" />
                <div>
                  <strong>{g.name}</strong>
                  <small>{g.kind}</small>
                  <span>{peso(g.price)}</span>
                  <div className="go">
                    <button className="btn" onClick={() => onAdd(g.id)}>Add to cart</button>
                    <button className="x rm" onClick={() => onRemove(g.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  )
}
