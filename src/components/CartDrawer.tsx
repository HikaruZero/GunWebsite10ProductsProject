import { useEffect, useState } from 'react'
import { FREE_SHIP, GUNS, peso } from '../data/guns'
import CheckoutForm from './CheckoutForm'
import './CartDrawer.css'

export type CartItem = { id: string; qty: number }

type Props = {
  open: boolean
  items: CartItem[]
  onClose: () => void
  onQty: (id: string, delta: number) => void
  onRemove: (id: string) => void
  onClear: () => void
}

export default function CartDrawer({ open, items, onClose, onQty, onRemove, onClear }: Props) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'done'>('cart')
  const [orderNo, setOrderNo] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open && step === 'done') setStep('cart')
  }, [open])

  if (!open) return null

  const rows = items.map((it) => ({ ...it, gun: GUNS.find((g) => g.id === it.id)! }))
  const total = rows.reduce((s, r) => s + r.gun.price * r.qty, 0)

  const place = () => {
    setOrderNo('SB-' + Math.floor(100000 + Math.random() * 900000))
    onClear()
    setStep('done')
  }

  return (
    <div className="overlay" onClick={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Cart" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>{step === 'checkout' ? 'Checkout' : step === 'done' ? 'Order placed' : 'Your cart'}</h2>
          <button className="x" onClick={onClose} aria-label="Close cart">×</button>
        </header>

        {step === 'done' && (
          <div className="done">
            <p className="ref">{orderNo}</p>
            <p>Thanks for your order. We will message you to confirm payment and shipping.</p>
            <button className="btn" onClick={onClose}>Keep browsing</button>
          </div>
        )}

        {step === 'cart' && (
          <>
            {rows.length === 0 ? (
              <p className="empty">Your cart is empty. Add a replica from the shop.</p>
            ) : (
              <ul className="lines">
                {rows.map((r) => (
                  <li key={r.id}>
                    <img src={r.gun.photo} alt="" />
                    <div>
                      <strong>{r.gun.name}</strong>
                      <small>{r.gun.kind}</small>
                      <span>{peso(r.gun.price)}</span>
                      <div className="qty">
                        <button onClick={() => onQty(r.id, -1)} aria-label="Less">−</button>
                        <b>{r.qty}</b>
                        <button onClick={() => onQty(r.id, 1)} aria-label="More">+</button>
                        <button className="rm" onClick={() => onRemove(r.id)}>Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <footer>
              {rows.length > 0 && (
                <div className="ship">
                  <p>{total >= FREE_SHIP ? 'You got free shipping' : 'Add ' + peso(FREE_SHIP - total) + ' more for free shipping'}</p>
                  <div><i style={{ width: Math.min(100, (total / FREE_SHIP) * 100) + '%' }} /></div>
                </div>
              )}
              <div className="total"><span>Total</span><strong>{peso(total)}</strong></div>
              <button className="btn" disabled={rows.length === 0} onClick={() => setStep('checkout')}>Check out</button>
            </footer>
          </>
        )}

        {step === 'checkout' && (
          <CheckoutForm total={total} onBack={() => setStep('cart')} onPlace={place} />
        )}
      </aside>
    </div>
  )
}
