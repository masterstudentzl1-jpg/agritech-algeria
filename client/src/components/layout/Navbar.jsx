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
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" opacity=".3"/>
            <path d="M12 6v6l4 2"/>
            <path d="M5 3l2 2M19 3l-2 2M12 2v2"/>
          </svg>
        </div>
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