import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/auth/register', form)
      navigate('/login')
    } catch {
      setError('Registration failed. Email may already be used.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.1)', width: '100%', maxWidth: '420px' }}>
        <h1 style={{ fontSize: '2rem', color: '#14532d', fontWeight: 'bold', marginBottom: '8px' }}>Create Account 🌿</h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Join AgriTech Algeria today</p>

        {error && <p style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {[['name', 'Full Name', 'text', 'your name'], ['email', 'Email', 'email', 'you@example.com'], ['password', 'Password', 'password', '••••••••']].map(([key, label, type, placeholder]) => (
            <div key={key} style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#374151', marginBottom: '6px' }}>{label}</label>
              <input type={type} placeholder={placeholder} value={form[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1fae5', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }} />
            </div>
          ))}
          <button type="submit"
            style={{ width: '100%', backgroundColor: '#16a34a', color: 'white', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }}>
            Register
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#16a34a', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  )
}