import { peso, type Gun } from '../data/guns'
import './GunCard.css'

type Props = {
  gun: Gun
  wished: boolean
  onWish: () => void
  onAdd: () => void
}

export default function GunCard({ gun, wished, onWish, onAdd }: Props) {
  return (
    <article className="card">
      <div className="shot">
        <a className="view" href={'#/gun/' + gun.id} aria-label={'View ' + gun.name}>
          <img src={gun.photo} alt={gun.name} loading="lazy" />
        </a>
        {gun.badge && <span className="pill">{gun.badge}</span>}
        <button className={'heart' + (wished ? ' on' : '')} onClick={onWish} aria-pressed={wished} aria-label="Toggle wishlist">
          {wished ? '♥' : '♡'}
        </button>
      </div>
      <div className="info">
        <small>{gun.kind}</small>
        <h3><a href={'#/gun/' + gun.id}>{gun.name}</a></h3>
        <p className={gun.stock <= 3 ? 'low' : 'ok'}>{gun.stock <= 3 ? 'Only ' + gun.stock + ' left' : 'In stock'}</p>
        <div className="row">
          <strong>{peso(gun.price)}</strong>
          <button className="btn" onClick={onAdd}>Add</button>
        </div>
      </div>
    </article>
  )
}
