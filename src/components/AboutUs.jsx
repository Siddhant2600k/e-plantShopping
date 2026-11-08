import { Heart, Leaf, Sun } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <span className="eyebrow"><Leaf size={14} /> OUR LITTLE PHILOSOPHY</span>
        <h2>Good things<br />grow <em>here.</em></h2>
        <p>At Paradise Nursery, we believe a little greenery can make a big difference. We bring together beautiful, easy-to-love houseplants that help turn everyday rooms into spaces that feel more alive.</p>
        <p>From your first leafy friend to the statement plant you have been dreaming of, our collection is selected to make plant care feel joyful, simple and rewarding.</p>
        <div className="about-values">
          <span><Heart size={16} /> Chosen with care</span>
          <span><Sun size={16} /> Made for real homes</span>
        </div>
      </div>
      <div className="about-image-wrap">
        <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85" alt="Sunlit room filled with houseplants" />
        <div className="image-caption">A greener home is a happier home.</div>
      </div>
    </section>
  )
}
