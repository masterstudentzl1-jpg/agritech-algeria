import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag"><span></span> Algeria's Smart Agriculture Platform</div>
          <h1>Grow Smarter with <em>IoT-Powered</em> Farm Tracking</h1>
          <p>Real-time sensors, crop monitoring, and smart analytics — built for Algerian farmers to maximize yield and minimize loss.</p>
          <div className="hero-btns">
            <Link to="/shop"><button className="btn-primary">Explore Our Devices</button></Link>
            <Link to="/dashboard"><button className="btn-outline">Live Demo</button></Link>
          </div>
          <div className="hero-stats">
            <div><div className="stat-val">500+</div><div className="stat-label">Farms Connected</div></div>
            <div><div className="stat-val">48</div><div className="stat-label">Wilayas Covered</div></div>
            <div><div className="stat-val">32%</div><div className="stat-label">Average Yield Gain</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="dashboard-card">
            <div className="d-header">
              <span>Farm Dashboard</span>
              <span className="live"><span className="live-dot"></span> Live</span>
            </div>
            <div className="sensor-grid">
              <div className="sensor-item"><div className="s-label">Temperature</div><div className="s-val good">24°C</div></div>
              <div className="sensor-item"><div className="s-label">Soil Moisture</div><div className="s-val warn">67%</div></div>
              <div className="sensor-item"><div className="s-label">Humidity</div><div className="s-val good">71%</div></div>
              <div className="sensor-item"><div className="s-label">Light Level</div><div className="s-val good">8.2k lx</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="section-tag">Why AgroSmart DZ</div>
        <h2>Everything a modern Algerian farmer needs</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="section-tag">Our IoT Shop</div>
        <h2>Smart devices for every type of farm</h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-badge">{p.badge}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-price">{p.price} <span>/ {p.unit}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="section-tag">How It Works</div>
        <h2>Up and running in 4 steps</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to modernize your farm?</h2>
        <p>Join 500+ Algerian farmers already using AgroSmart DZ.</p>
        <Link to="/register"><button className="btn-white">Start Free Trial — 30 Days</button></Link>
      </section>

    </div>
  )
}

const features = [
  { icon: '📡', title: 'Real-Time Monitoring', desc: 'Track temperature, humidity, soil moisture, and light levels 24/7 from any device.' },
  { icon: '🔧', title: 'Smart IoT Devices', desc: 'Plug-and-play sensor kits built for Algeria\'s climate conditions.' },
  { icon: '📊', title: 'Crop Analytics', desc: 'AI-powered insights predict irrigation schedule and detect early disease signs.' },
  { icon: '🔔', title: 'Instant Alerts', desc: 'Get SMS and app notifications when your crops need attention.' },
  { icon: '🏡', title: 'Multi-Farm Management', desc: 'Manage multiple plots from a single dashboard.' },
  { icon: '🌍', title: 'Arabic & French Support', desc: 'Full support in Arabic, French, and Tamazight.' },
]

const products = [
  { badge: 'Best Seller', name: 'SoilSense Pro', desc: 'Soil moisture, pH and nutrient sensor with 6-month battery.', price: '12,500 DZD', unit: 'unit' },
  { badge: 'New', name: 'WeatherNode DZ', desc: 'Micro weather station with temperature, humidity and rainfall.', price: '18,900 DZD', unit: 'unit' },
  { badge: 'Popular', name: 'FarmKit Starter', desc: 'Complete starter pack — sensors, gateway hub, and 1-year subscription.', price: '45,000 DZD', unit: 'kit' },
]

const steps = [
  { title: 'Order Your Kit', desc: 'Choose the IoT package that fits your farm size' },
  { title: 'Install Sensors', desc: 'Our technicians configure sensors across your fields' },
  { title: 'Connect Dashboard', desc: 'Access live data from any smartphone or computer' },
  { title: 'Grow Smarter', desc: 'Follow AI recommendations and watch yield increase' },
]