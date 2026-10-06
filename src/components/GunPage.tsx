import { GUNS, peso } from '../data/guns'
import { DETAILS } from '../data/details'
import SpecTable from './SpecTable'
import './GunPage.css'

type Props = {
  id: string
  wished: boolean
  onWish: (id: string) => void
  onAdd: (id: string) => void
}

export default function GunPage({ id, wished, onWish, onAdd }: Props) {
  const n = GUNS.findIndex((g) => g.id === id)
  const gun = GUNS[n]
  const detail = DETAILS[id]

  if (!gun || !detail) {
    return (
      <main className="gp-missing">
        <h1>Replica not found</h1>
        <a className="btn" href="#shop">Back to shop</a>
      </main>
    )
  }

  const prev = GUNS[(n - 1 + GUNS.length) % GUNS.length]
  const next = GUNS[(n + 1) % GUNS.length]

  return (
    <main className="gp">
      <section className="gp-hero" style={{ backgroundImage: `url("${gun.bg}")` }}>
        <div className="gp-shade" />
        <div className="gp-top">
          <a className="back" href="#catalog">← Back to catalog</a>
          <span className="pill dark">{gun.kind}</span>
          <h1>{gun.name}</h1>
          <ul className="about">
            {detail.about.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="buy">
            <strong>{peso(gun.price)}</strong>
            <button className="btn" onClick={() => onAdd(gun.id)}>Add to cart</button>
            <button className={'heart' + (wished ? ' on' : '')} onClick={() => onWish(gun.id)} aria-pressed={wished} aria-label="Toggle wishlist">
              {wished ? '♥' : '♡'}
            </button>
            <span className={gun.stock <= 3 ? 'low' : 'ok'}>{gun.stock <= 3 ? 'Only ' + gun.stock + ' left' : 'In stock'}</span>
          </div>
        </div>
      </section>

      <section className="gp-sec alt">
        <h2>Specs</h2>
        <p className="best">Best for: {detail.bestFor}</p>
        <div className="spec-grid">
          <SpecTable title="Airsoft replica" rows={gun.specs} />
          <SpecTable title="Real steel" note="Figures for the real firearm, for reference" rows={detail.real} />
        </div>
      </section>

      <section className="gp-sec">
        <h2>Real steel history</h2>
        <ul className="hist">
          {gun.history.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <nav className="gp-nav">
        <a href={'#/gun/' + prev.id}>← {prev.name}</a>
        <a href="#catalog">All replicas</a>
        <a href={'#/gun/' + next.id}>{next.name} →</a>
      </nav>
    </main>
  )
}
