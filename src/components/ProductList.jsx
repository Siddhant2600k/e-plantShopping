
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  Leaf,
  ShoppingBag,
  House,
  Sprout,
} from 'lucide-react'
import AboutUs from './AboutUs'
import { addItem } from '../redux/CartSlice'

// All plant data is included in this file so the
// product listing and category counts are easy to verify.
const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`

const categories = [
  {
    id: 'easy-care',
    title: 'Easy-care favourites',
    subtitle: 'Low-fuss companions for busy days.',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 599,
        description: 'Architectural leaves that thrive on neglect.',
        image: photo('photo-1593482892290-f54927ae2b3b'),
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        price: 449,
        description: 'A trailing classic with heart-shaped leaves.',
        image: photo('photo-1614594975525-e45190c55d0b'),
      },
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 699,
        description: 'Glossy foliage and wonderfully low demands.',
        image: photo('photo-1632207691143-643e2f2a2f3b'),
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        price: 399,
        description: 'Playful arching leaves for shelves and desks.',
        image: photo('photo-1572688484438-313a6e50c333'),
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 499,
        description: 'A sculptural succulent with rounded leaves.',
        image: photo('photo-1509423350716-97f9360b4e09'),
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 649,
        description: 'Elegant leaves with graceful white blooms.',
        image: photo('photo-1593691509543-c55fb32e5cee'),
      },
    ],
  },
  {
    id: 'statement',
    title: 'Statement plants',
    subtitle: 'Big-leaf energy. Instant room character.',
    plants: [
      {
        id: 'monstera',
        name: 'Monstera Deliciosa',
        price: 1199,
        description: 'Iconic split leaves that make a room feel lush.',
        image: photo('photo-1614594895304-fe7116ac3b58'),
      },
      {
        id: 'fiddle-leaf',
        name: 'Fiddle Leaf Fig',
        price: 1599,
        description: 'A bold tree for bright corners.',
        image: photo('photo-1501004318641-b39e6451bec6'),
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        price: 999,
        description: 'Deep glossy leaves with a modern silhouette.',
        image: photo('photo-1600411832986-5a4476b64a1c'),
      },
      {
        id: 'bird-paradise',
        name: 'Bird of Paradise',
        price: 1899,
        description: 'Tropical drama with tall, elegant foliage.',
        image: photo('photo-1597055181300-a8b7be7f6b4b'),
      },
      {
        id: 'calathea',
        name: 'Calathea Orbifolia',
        price: 1099,
        description: 'Rounded leaves with beautiful silvery stripes.',
        image: photo('photo-1597055181449-1b4b3f2b6a89'),
      },
      {
        id: 'alocasia',
        name: 'Alocasia Polly',
        price: 899,
        description: 'Arrow-shaped leaves with striking pale veins.',
        image: photo('photo-1593691509543-c55fb32e5cee'),
      },
    ],
  },
  {
    id: 'fresh-air',
    title: 'Fresh-air greens',
    subtitle: 'Beautiful foliage for your favourite spaces.',
    plants: [
      {
        id: 'areca-palm',
        name: 'Areca Palm',
        price: 1299,
        description: 'Feathery fronds bring a relaxed tropical feel.',
        image: photo('photo-1512428813834-c702c7702b78'),
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        price: 749,
        description: 'A soft cascade of fresh green fronds.',
        image: photo('photo-1597055181300-a8b7be7f6b4b'),
      },
      {
        id: 'dracaena',
        name: 'Dracaena',
        price: 899,
        description: 'Upright foliage that adds height and texture.',
        image: photo('photo-1509423350716-97f9360b4e09'),
      },
      {
        id: 'english-ivy',
        name: 'English Ivy',
        price: 549,
        description: 'A graceful trailing plant for hanging pots.',
        image: photo('photo-1497250681960-ef046c08a56e'),
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        price: 799,
        description: 'A compact palm for smaller spaces.',
        image: photo('photo-1518531933037-91b2f5f229cc'),
      },
      {
        id: 'philodendron',
        name: 'Heartleaf Philodendron',
        price: 599,
        description: 'Heart-shaped leaves that trail beautifully.',
        image: photo('photo-1616690247584-7b4f8f4d3d4a'),
      },
    ],
  },
]

const money = (amount) =>
  `₹${amount.toLocaleString('en-IN')}`

function ShopNavbar() {
  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.items
  )

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className="site-header">
      <div className="nav-inner">
        <button
          type="button"
          className="brand"
          onClick={() => navigate('/')}
          aria-label="Paradise Nursery home"
        >
          <span className="brand-mark">
            <Leaf size={21} />
          </span>
          <span>
            paradise<span className="brand-thin"> nursery</span>
          </span>
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          <button
            type="button"
            onClick={() => navigate('/')}
          >
            <House size={15} /> Home
          </button>

          <button
            type="button"
            onClick={() => navigate('/plants')}
          >
            <Sprout size={15} /> Plants
          </button>

          <button
            type="button"
            className="cart-nav"
            onClick={() => navigate('/cart')}
            aria-label={`Shopping cart with ${cartQuantity} items`}
          >
            <ShoppingBag size={17} />
            Cart
            <span className="cart-count" aria-live="polite">
              {cartQuantity}
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default function ProductList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.items
  )

  const totalPlants = categories.reduce(
    (total, category) => total + category.plants.length,
    0
  )

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <div className="page-shell">
      <ShopNavbar />

      <main>
        <section className="shop-hero">
          <div>
            <span className="eyebrow eyebrow-light">
              <Leaf size={14} /> THE HOUSEPLANT EDIT
            </span>

            <h1>
              Find your<br />
              <em>kind of green.</em>
            </h1>

            <p>
              Little leafy upgrades for every corner,
              mood and kind of plant parent.
            </p>
          </div>

          <div className="shop-hero-note">
            <span>{totalPlants}</span>
            <small>
              thoughtful<br />plant picks
            </small>
          </div>
        </section>

        <AboutUs />

        <section className="catalog-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>
                Plants to live <em>with.</em>
              </h2>
              <p>
                Browse {totalPlants} plants across{' '}
                {categories.length} categories.
              </p>
            </div>

            <button
              type="button"
              className="text-link"
              onClick={() => navigate('/cart')}
            >
              View your bag <ArrowRight size={16} />
            </button>
          </div>

          {categories.map((category, index) => (
            <section
              className="category-block"
              key={category.id}
            >
              <div className="category-heading">
                <div className="category-number">
                  0{index + 1}
                </div>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                  <span className="category-count">
                    {category.plants.length} plants
                  </span>
                </div>
              </div>

              <div className="plant-grid">
                {category.plants.map((plant) => {
                  const inCart = cartItems.some(
                    (item) => item.id === plant.id
                  )

                  return (
                    <article
                      className="plant-card"
                      key={plant.id}
                    >
                      <div className="plant-image-wrap">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          loading="lazy"
                        />
                        <span className="plant-tag">
                          HOUSEPLANT
                        </span>
                      </div>

                      <div className="plant-info">
                        <div className="plant-title-row">
                          <h4>{plant.name}</h4>
                          <span className="plant-price">
                            {money(plant.price)}
                          </span>
                        </div>

                        <p>{plant.description}</p>

                        <button
                          type="button"
                          className={`button add-button ${
                            inCart
                              ? 'button-added'
                              : 'button-dark'
                          }`}
                          onClick={() => handleAdd(plant)}
                          disabled={inCart}
                        >
                          {inCart ? (
                            <>
                              <Check size={16} />
                              Added to bag
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={16} />
                              Add to Cart
                            </>
                          )}
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

      <footer className="site-footer">
        <span className="brand brand-footer">
          <Leaf size={18} /> paradise nursery
        </span>
        <span>Bring a little nature home.</span>
        <span>© 2026 Paradise Nursery</span>
      </footer>
    </div>
  )
}
