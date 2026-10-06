import type { FormEvent } from 'react'
import { peso } from '../data/guns'
import './CheckoutForm.css'

type Props = { total: number; onBack: () => void; onPlace: () => void }

export default function CheckoutForm({ total, onBack, onPlace }: Props) {
  const submit = (e: FormEvent) => {
    e.preventDefault()
    onPlace()
  }

  return (
    <form className="checkout" onSubmit={submit}>
      <label>Full name<input required autoComplete="name" /></label>
      <label>Mobile number<input required type="tel" autoComplete="tel" /></label>
      
      <label>Address<textarea required rows={2} autoComplete="street-address" /></label>
      <label>
        Payment method
        <select defaultValue="Bank transfer">
          <option>Bank transfer</option>
          <option>GCash</option>
          <option>Cash on pickup</option>
        </select>
      </label>
      <label className="check"><input type="checkbox" required />I am 18 or older and will wear eye protection when playing</label>
      <div className="total"><span>Total</span><strong>{peso(total)}</strong></div>
      <div className="actions">
        <button type="button" className="btn ghost" onClick={onBack}>Back</button>
        <button type="submit" className="btn">Place order</button>
      </div>
    </form>
  )
}
