import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', form)
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    } catch {
      setError('Invalid email or password')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 8px 40px rgba(0,0,0,0.1)', width: '100%', maxWidth: '420px' }}>
        <h1 style={{ fontSize: '2rem', color: '#14532d', fontWeight: 'bold', marginBottom: '8px' }}>Welcome Back 🌱</h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Log in to your AgriTech account</p>

        {error && <p style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#374151', marginBottom: '6px' }}>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1fae5', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#374151', marginBottom: '6px' }}>Password</label>
            <input type="password" placeholder="••••••••" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1fae5', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }} />
          </div>
          <button type="submit"
            style={{ width: '100%', backgroundColor: '#16a34a', color: 'white', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
            Login
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
          Don't have an account? <Link to="/register" style={{ color: '#16a34a', fontWeight: 'bold' }}>Register</Link>
        </p>
      </div>
    </div>
  )
}