import { useState } from 'react'
import type { Part } from '../data/details'
import './Anatomy.css'

type Props = { photo: string; name: string; parts: Part[] }

export default function Anatomy({ photo, name, parts }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="anat">
      <div className="fig">
        <img src={photo} alt={name} />
        {parts.map((p, n) => (
          <button
            key={p.name}
            className={'dot' + (n === active ? ' on' : '')}
            style={{ left: p.x + '%', top: p.y + '%' }}
            onClick={() => setActive(n)}
            onMouseEnter={() => setActive(n)}
            aria-label={p.name}
          >
            {n + 1}
          </button>
        ))}
      </div>
      <ol className="parts">
        {parts.map((p, n) => (
          <li key={p.name} className={n === active ? 'on' : ''}>
            <button onClick={() => setActive(n)} onMouseEnter={() => setActive(n)}>
              <b>{n + 1}</b>
              <span>
                <strong>{p.name}</strong>
                <em>{p.desc}</em>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
