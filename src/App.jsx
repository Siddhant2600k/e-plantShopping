import { Routes, Route, useNavigate } from 'react-router-dom'
import { ArrowRight, Leaf, Sprout } from 'lucide-react'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className="landing">
      <div className="landing-shade" />
      <header className="landing-topbar">
        <button className="brand brand-light" onClick={() => navigate('/')} aria-label="Paradise Nursery home">
          <span className="brand-mark"><Sprout size={23} /></span>
          <span>paradise<span className="brand-thin"> nursery</span></span>
        </button>
        <button className="text-link light-link" onClick={() => navigate('/plants')}>Explore plants <ArrowRight size={16} /></button>
      </header>
      <section className="hero-content">
        <span className="eyebrow eyebrow-light"><Leaf size={14} /> A little more green, every day</span>
        <h1>Make room<br />for <em>good things.</em></h1>
        <p>Thoughtfully chosen houseplants to bring calm, character and a breath of fresh air into your everyday spaces.</p>
        <button className="button button-cream" onClick={() => navigate('/plants')}>Get Started <ArrowRight size={17} /></button>
        <div className="hero-note"><span className="hero-note-line" /> GROW A HOME YOU LOVE</div>
      </section>
      <div className="hero-bottom"><span>PLANTS WITH PURPOSE</span><span>01 — 03</span></div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}
