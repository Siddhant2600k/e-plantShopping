import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check, Leaf, ShoppingBag } from 'lucide-react'
import Navbar from './Navbar'
import AboutUs from './AboutUs'
import { categories } from '../data/plants'
import { addItem } from '../redux/CartSlice'

const money = (amount) => `₹${amount.toLocaleString('en-IN')}`

export default function ProductList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)
  const [addedIds, setAddedIds] = useState([])

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
    setAddedIds((previous) => [...previous, plant.id])
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="shop-hero">
          <div>
            <span className="eyebrow eyebrow-light"><Leaf size={14} /> THE HOUSEPLANT EDIT</span>
            <h1>Find your<br /><em>kind of green.</em></h1>
            <p>Little leafy upgrades for every corner, mood and kind of plant parent.</p>
          </div>
          <div className="shop-hero-note"><span>18</span><small>thoughtful<br />plant picks</small></div>
        </section>
        <AboutUs />
        <section className="catalog-section">
          <div className="section-heading">
            <div><span className="eyebrow">THE COLLECTION</span><h2>Plants to live <em>with.</em></h2></div>
            <button className="text-link" onClick={() => navigate('/cart')}>View your bag <ArrowRight size={16} /></button>
          </div>

          {categories.map((category, index) => (
            <section className="category-block" key={category.id}>
              <div className="category-heading">
                <div className="category-number">0{index + 1}</div>
                <div><h3>{category.title}</h3><p>{category.subtitle}</p></div>
              </div>
              <div className="plant-grid">
                {category.plants.map((plant) => {
                  const inCart = cartItems.some((item) => item.id === plant.id)
                  const added = inCart || addedIds.includes(plant.id)
                  return (
                    <article className="plant-card" key={plant.id}>
                      <div className="plant-image-wrap">
                        <img src={plant.image} alt={plant.name} loading="lazy" />
                        <span className="plant-tag">HOUSEPLANT</span>
                      </div>
                      <div className="plant-info">
                        <div className="plant-title-row"><h4>{plant.name}</h4><span className="plant-price">{money(plant.price)}</span></div>
                        <p>{plant.description}</p>
                        <button className={`button add-button ${added ? 'button-added' : 'button-dark'}`} onClick={() => handleAdd(plant)} disabled={added}>
                          {added ? <><Check size={16} /> Added to bag</> : <><ShoppingBag size={16} /> Add to Cart</>}
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </section>
      </main>
      <footer className="site-footer"><span className="brand brand-footer"><Leaf size={18} /> paradise nursery</span><span>Bring a little nature home.</span><span>© 2026 Paradise Nursery</span></footer>
    </div>
  )
}
