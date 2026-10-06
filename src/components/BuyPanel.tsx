import { peso, type Gun } from '../data/guns'
import './BuyPanel.css'

type Props = {
  gun: Gun
  wished: boolean
  onWish: () => void
  onBuy: () => void
  onHold: (held: boolean) => void
}

export default function BuyPanel({ gun, wished, onWish, onBuy, onHold }: Props) {
  return (
    <aside
      className="panel"
      onMouseEnter={() => onHold(true)}
      onMouseLeave={() => onHold(false)}
      onFocus={() => onHold(true)}
      onBlur={() => onHold(false)}
    >
      <div className="shot">
        <a href={'#/gun/' + gun.id} aria-label={'View ' + gun.name}>
          <img src={gun.photo} alt={gun.name} />
        </a>
        {gun.badge && <span className="pill">{gun.badge}</span>}
        <button className={'heart' + (wished ? ' on' : '')} onClick={onWish} aria-pressed={wished} aria-label="Toggle wishlist">
          {wished ? '♥' : '♡'}
        </button>
      </div>
      <dl>
        {gun.specs.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p className={gun.stock <= 3 ? 'low' : 'ok'}>{gun.stock <= 3 ? 'Only ' + gun.stock + ' left' : 'In stock'}</p>
      <a className="more" href={'#/gun/' + gun.id}>View specs →</a>
      <div className="buyrow">
        <strong>{peso(gun.price)}</strong>
        <button className="btn" onClick={onBuy}>Add to cart</button>
      </div>
    </aside>
  )
}
