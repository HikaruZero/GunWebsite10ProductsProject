import type { Theme } from '../hooks/useTheme'
import './Navbar.css'

type Props = { cartCount: number; wishCount: number; onCart: () => void; onWish: () => void; theme: Theme; onTheme: () => void }

export default function Navbar({ cartCount, wishCount, onCart, onWish, theme, onTheme }: Props) {
  return (
    <header className="nav">
      <a className="brand" href="#home">Schwarze<span>Ballistics</span></a>
      <nav>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#catalog">Catalog</a>
        <a href="#contact">Contact us</a>
        <button className="cart" onClick={onTheme} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'}>
          {theme === 'dark' ? '☀ Light' : '☾ Dark'}
        </button>
        <button className="cart" onClick={onWish}>♥ Wishlist ({wishCount})</button>
        <button className="cart" onClick={onCart}>Cart ({cartCount})</button>
      </nav>
    </header>
  )
}
