import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
    {/* LOGO */}
<Link to="/" className="nav-logo">
  <img 
    src="/logo.png" 
    alt="AgroSmart DZ" 
    style={{ height: '45px', objectFit: 'contain' }} 
  />
   AgroSmart <span>DZ</span>
</Link>

      {/* DESKTOP LINKS */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {isActive(link.path) && <span className="active-dot"></span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn-register">Get Started</button>
        </Link>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}