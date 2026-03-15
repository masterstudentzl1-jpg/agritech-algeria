import { useState } from 'react'

const items = [
  { id: 1, name: 'Soil Moisture Sensor', price: 4500, icon: '💧', stock: 50 },
  { id: 2, name: 'Temp & Humidity Module', price: 3800, icon: '🌡️', stock: 35 },
  { id: 3, name: 'Smart Irrigation Controller', price: 12000, icon: '🚿', stock: 20 },
  { id: 4, name: 'Light Intensity Sensor', price: 2900, icon: '☀️', stock: 60 },
  { id: 5, name: 'IoT Gateway Hub', price: 18500, icon: '📡', stock: 15 },
]

export default function ShopPage() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id)
      if (exists) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id))

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px', padding: '60px', backgroundColor: '#f0fdf4', minHeight: '100vh' }}>
      
      {/* Products */}
      <div>
        <h1 style={{ fontSize: '2rem', color: '#14532d', marginBottom: '30px' }}>🛒 Shop IoT Devices</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {items.map(item => (
            <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 'bold', color: '#14532d', marginBottom: '6px' }}>{item.name}</h3>
              <p style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '16px' }}>{item.price.toLocaleString()} DZD</p>
              <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '12px' }}>In stock: {item.stock}</p>
              <button onClick={() => addToCart(item)}
                style={{ width: '100%', backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', height: 'fit-content', position: 'sticky', top: '20px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#14532d', marginBottom: '20px' }}>🧺 Your Cart</h2>
        {cart.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0' }}>Cart is empty</p>
        ) : (
          <>
            {cart.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid #f0fdf4' }}>
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{c.icon} {c.name}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>x{c.qty} — {(c.price * c.qty).toLocaleString()} DZD</p>
                </div>
                <button onClick={() => removeFromCart(c.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
              </div>
            ))}
            <div style={{ borderTop: '2px solid #14532d', paddingTop: '16px', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#14532d' }}>Total: {total.toLocaleString()} DZD</p>
              <button style={{ marginTop: '14px', width: '100%', backgroundColor: '#14532d', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}