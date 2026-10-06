import { useEffect, useRef, useState } from 'react'
import { GUNS } from '../data/guns'
import BuyPanel from './BuyPanel'
import GunPicker from './GunPicker'
import './Shop.css'

const SLIDE_MS = 6000

type Props = {
  onBuy: (id: string) => void
  wishlist: string[]
  onWish: (id: string) => void
}

export default function Shop({ onBuy, wishlist, onWish }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [tick, setTick] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const gun = GUNS[index]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !visible) return
    const t = setTimeout(() => setIndex((n) => (n + 1) % GUNS.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [index, paused, visible, tick])

  const pick = (n: number) => {
    setIndex(n)
    setTick((t) => t + 1)
  }

  const hold = (held: boolean) => {
    setPaused(held)
    if (!held) setTick((t) => t + 1)
  }

  return (
    <section className="shop" id="shop" ref={ref}>
      {GUNS.map((g, n) => (
        <div key={g.id} className={'shop-bg' + (n === index ? ' on' : '')} style={{ backgroundImage: `url("${g.bg}")` }} />
      ))}
      <div className="shop-shade" />
      <div className="shop-stage">
        <div className="intro" key={gun.id + 'a'} aria-live="polite">
          <span className="pill dark">{gun.kind}</span>
          <h2>{gun.name}</h2>
          <h3>Real steel history</h3>
          <ul>
            {gun.history.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <a className="btn ghost" href={'#/gun/' + gun.id}>View specs</a>
        </div>
        <div className="panel-wrap" key={gun.id + 'b'}>
          <BuyPanel gun={gun} wished={wishlist.includes(gun.id)} onWish={() => onWish(gun.id)} onBuy={() => onBuy(gun.id)} onHold={hold} />
        </div>
      </div>
      <GunPicker guns={GUNS} index={index} paused={paused} tick={tick} duration={SLIDE_MS} onPick={pick} />
    </section>
  )
}
