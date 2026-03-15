import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#14532d', color: 'white', padding: '40px 60px 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '30px' }}>
        
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px' }}>🌱 AgriTech Algeria</h3>
          <p style={{ color: '#bbf7d0', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Empowering Algerian farmers with smart IoT solutions for better crop tracking and higher yields.
          </p>
        </div>

        <div>
          <h4 style={{ fontWeight: 'bold', marginBottom: '12px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[['/', 'Home'], ['/products', 'Products'], ['/shop', 'Shop'], ['/contact', 'Contact']].map(([path, label]) => (
              <li key={path}>
                <Link to={path} style={{ color: '#bbf7d0', textDecoration: 'none', fontSize: '0.9rem' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 'bold', marginBottom: '12px' }}>Contact</h4>
          <p style={{ color: '#bbf7d0', fontSize: '0.9rem', lineHeight: '2' }}>
            📍 Algiers, Algeria<br />
            📧 contact@agritech-dz.com<br />
            📞 +213 555 123 456
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #166534', paddingTop: '20px', textAlign: 'center', color: '#86efac', fontSize: '0.85rem' }}>
        © 2025 AgriTech Algeria. All rights reserved.
      </div>
    </footer>
  )
}