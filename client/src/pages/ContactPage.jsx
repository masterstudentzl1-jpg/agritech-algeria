import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fdf4', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#14532d', fontWeight: 'bold', marginBottom: '10px' }}>Contact Us 📬</h1>
      <p style={{ color: '#6b7280', marginBottom: '50px', fontSize: '1.1rem' }}>We're here to help Algerian farmers grow smarter.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', width: '100%', maxWidth: '1000px' }}>

        {/* Info */}
        <div>
          <h2 style={{ color: '#14532d', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '24px' }}>Get In Touch</h2>
          {[['📍', 'Address', 'Algiers, Algeria'], ['📧', 'Email', 'contact@agritech-dz.com'], ['📞', 'Phone', '+213 555 123 456'], ['🕒', 'Hours', 'Sun–Thu: 8am – 5pm']].map(([icon, label, value]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 'bold', color: '#374151', marginBottom: '2px' }}>{label}</p>
                <p style={{ color: '#6b7280' }}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ color: '#14532d', fontSize: '1.4rem', fontWeight: 'bold' }}>Message Sent!</h3>
              <p style={{ color: '#6b7280', marginTop: '8px' }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} style={{ marginTop: '24px', backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[['name', 'Your Name', 'text', 'your name'], ['email', 'Email', 'email', 'you@example.com']].map(([key, label, type, placeholder]) => (
                <div key={key} style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', color: '#374151', marginBottom: '6px' }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1fae5', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }} />
                </div>
              ))}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#374151', marginBottom: '6px' }}>Message</label>
                <textarea placeholder="How can we help you?" value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required rows={5}
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1fae5', outline: 'none', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button type="submit"
                style={{ width: '100%', backgroundColor: '#16a34a', color: 'white', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}