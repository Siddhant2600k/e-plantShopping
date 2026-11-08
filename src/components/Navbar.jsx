import { Leaf, ShoppingBag, House, Sprout } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))

  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark"><Leaf size={21} /></span>
          <span>paradise<span className="brand-thin"> nursery</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end><House size={15} /> Home</NavLink>
          <NavLink to="/plants"><Sprout size={15} /> Plants</NavLink>
          <NavLink to="/cart" className="cart-nav"><ShoppingBag size={17} /> Cart <span className="cart-count">{count}</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
