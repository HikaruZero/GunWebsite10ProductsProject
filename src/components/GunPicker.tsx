import { useEffect, useRef } from 'react'
import type { Gun } from '../data/guns'
import './GunPicker.css'

type Props = {
  guns: Gun[]
  index: number
  paused: boolean
  tick: number
  duration: number
  onPick: (n: number) => void
}

export default function GunPicker({ guns, index, paused, tick, duration, onPick }: Props) {
  const row = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = row.current
    const b = el?.children[index] as HTMLElement | undefined
    if (el && b) el.scrollTo({ left: b.offsetLeft - (el.clientWidth - b.clientWidth) / 2, behavior: 'smooth' })
  }, [index])

  return (
    <div className="picker" ref={row}>
      {guns.map((g, n) => (
        <button key={g.id} className={n === index ? 'on' : ''} onClick={() => onPick(n)} aria-pressed={n === index} aria-label={'Show ' + g.name}>
          <img src={g.photo} alt="" />
          <span>{g.name}</span>
          {n === index && (
            <i
              key={tick + '-' + index}
              className="bar"
              style={{ animationDuration: duration + 'ms', animationPlayState: paused ? 'paused' : 'running' }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
