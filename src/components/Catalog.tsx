import { useMemo, useState } from 'react'
import { CATEGORIES, GUNS } from '../data/guns'
import GunCard from './GunCard'
import './Catalog.css'

type Props = {
  wishlist: string[]
  onWish: (id: string) => void
  onAdd: (id: string) => void
}

export default function Catalog({ wishlist, onWish, onAdd }: Props) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('featured')

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    const out = GUNS.filter((g) => (cat === 'All' || g.category === cat) && (!q || (g.name + ' ' + g.kind).toLowerCase().includes(q)))
    if (sort === 'low') out.sort((a, b) => a.price - b.price)
    if (sort === 'high') out.sort((a, b) => b.price - a.price)
    if (sort === 'name') out.sort((a, b) => a.name.localeCompare(b.name))
    return out
  }, [query, cat, sort])

  return (
    <section className="catalog" id="catalog">
      <div className="head">
        <h2>All replicas</h2>
        <p>{list.length} of {GUNS.length} items</p>
      </div>
      <div className="tools">
        <input type="search" placeholder="Search replicas" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search replicas" />
        <div className="chips">
          {CATEGORIES.map((c) => (
            <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)} aria-pressed={c === cat}>{c}</button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
          <option value="featured">Featured</option>
          <option value="low">Price low to high</option>
          <option value="high">Price high to low</option>
          <option value="name">Name</option>
        </select>
      </div>
      {list.length === 0 ? (
        <p className="none">No replicas match your search.</p>
      ) : (
        <div className="grid">
          {list.map((g) => (
            <GunCard key={g.id} gun={g} wished={wishlist.includes(g.id)} onWish={() => onWish(g.id)} onAdd={() => onAdd(g.id)} />
          ))}
        </div>
      )}
      <p className="note">Airsoft replicas shoot 6mm BBs. Eye protection is required. Buyers must be 18 or older.</p>
    </section>
  )
}
