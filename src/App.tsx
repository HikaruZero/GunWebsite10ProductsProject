import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import CartDrawer, { type CartItem } from './components/CartDrawer'
import WishlistDrawer from './components/WishlistDrawer'
import { GUNS } from './data/guns'
import useStored from './hooks/useStored'
import useTheme from './hooks/useTheme'
import useRoute from './hooks/useRoute'
import GunPage from './components/GunPage'

export default function App() {
  const [cart, setCart] = useStored<CartItem[]>('sb-cart', [])
  const [wishlist, setWishlist] = useStored<string[]>('sb-wish', [])
  const [theme, toggleTheme] = useTheme()
  const [cartOpen, setCartOpen] = useState(false)
  const [wishOpen, setWishOpen] = useState(false)
  const gunId = useRoute()

  const stockOf = (id: string) => GUNS.find((g) => g.id === id)?.stock ?? 1

  const add = (id: string) => {
    setCart((c) =>
      c.some((i) => i.id === id)
        ? c.map((i) => (i.id === id ? { ...i, qty: Math.min(stockOf(id), i.qty + 1) } : i))
        : [...c, { id, qty: 1 }],
    )
    setWishOpen(false)
    setCartOpen(true)
  }

  const changeQty = (id: string, delta: number) =>
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: Math.min(stockOf(id), Math.max(1, i.qty + delta)) } : i)))

  const remove = (id: string) => setCart((c) => c.filter((i) => i.id !== id))

  const toggleWish = (id: string) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))

  return (
    <>
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        wishCount={wishlist.length}
        onCart={() => setCartOpen(true)}
        onWish={() => setWishOpen(true)}
        theme={theme}
        onTheme={toggleTheme}
      />
      {gunId ? (
        <GunPage id={gunId} wished={wishlist.includes(gunId)} onWish={toggleWish} onAdd={add} />
      ) : (
        <>
          <Home />
          <Shop onBuy={add} wishlist={wishlist} onWish={toggleWish} />
          <Catalog wishlist={wishlist} onWish={toggleWish} onAdd={add} />
        </>
      )}
      <Contact />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onQty={changeQty} onRemove={remove} onClear={() => setCart([])} />
      <WishlistDrawer open={wishOpen} ids={wishlist} onClose={() => setWishOpen(false)} onRemove={toggleWish} onAdd={add} />
    </>
  )
}
