import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2, Leaf } from 'lucide-react'
import Navbar from './Navbar'
import { removeItem, updateQuantity } from '../redux/CartSlice'

const money = (amount) => `₹${amount.toLocaleString('en-IN')}`

export default function CartItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="page-shell">
      <Navbar />
      <main className="cart-page">
        <div className="cart-heading">
          <div><span className="eyebrow">YOUR LITTLE GREEN COLLECTION</span><h1>Shopping <em>bag.</em></h1><p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} ready to make themselves at home.</p></div>
          <div className="cart-heading-icon"><ShoppingBag size={27} /><span>{totalItems}</span></div>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-icon"><Leaf size={34} /></div>
            <h2>Your bag is taking a <em>breather.</em></h2>
            <p>There are plenty of lovely leaves waiting to come home with you.</p>
            <button className="button button-dark" onClick={() => navigate('/plants')}>Explore plants <ArrowRight size={17} /></button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list">
              <div className="cart-list-top"><span>YOUR PLANTS</span><span>{items.length} {items.length === 1 ? 'ITEM TYPE' : 'ITEM TYPES'}</span></div>
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img className="cart-thumb" src={item.image} alt={item.name} />
                  <div className="cart-product">
                    <span className="eyebrow">{item.category || 'HOUSEPLANT'}</span>
                    <h3>{item.name}</h3>
                    <p>{money(item.price)} <span>/ plant</span></p>
                    <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={14} /> Remove</button>
                  </div>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button>
                  </div>
                  <div className="line-total"><small>ITEM TOTAL</small><strong>{money(item.price * item.quantity)}</strong></div>
                </article>
              ))}
              <button className="continue-link" onClick={() => navigate('/plants')}><ArrowLeft size={16} /> Continue shopping</button>
            </section>
            <aside className="order-card">
              <span className="eyebrow">A QUICK RECAP</span>
              <h2>Order <em>summary.</em></h2>
              <div className="summary-line"><span>Plants ({totalItems})</span><strong>{money(subtotal)}</strong></div>
              <div className="summary-line"><span>Delivery</span><strong className="free-label">FREE</strong></div>
              <div className="summary-divider" />
              <div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div>
              <p className="tax-note">Taxes, if applicable, are included in the listed prices.</p>
              <button className="button button-dark checkout-button" onClick={() => window.alert('Coming Soon! Secure checkout is being planted.')}>Checkout <ArrowRight size={17} /></button>
              <div className="secure-note"><Leaf size={14} /> Thoughtfully packed, always.</div>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer"><span className="brand brand-footer"><Leaf size={18} /> paradise nursery</span><span>Bring a little nature home.</span><span>© 2026 Paradise Nursery</span></footer>
    </div>
  )
}
