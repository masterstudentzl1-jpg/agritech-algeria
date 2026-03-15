const products = [
  { id: 1, name: 'Soil Moisture Sensor', desc: 'Monitors soil water levels in real-time to optimize irrigation.', price: '4,500 DZD', icon: '💧' },
  { id: 2, name: 'Temperature & Humidity Module', desc: 'Tracks air temperature and humidity around your crops 24/7.', price: '3,800 DZD', icon: '🌡️' },
  { id: 3, name: 'Smart Irrigation Controller', desc: 'Automates watering schedules based on live sensor data.', price: '12,000 DZD', icon: '🚿' },
  { id: 4, name: 'Light Intensity Sensor', desc: 'Measures sunlight exposure to help manage crop growth cycles.', price: '2,900 DZD', icon: '☀️' },
  { id: 5, name: 'IoT Gateway Hub', desc: 'Central hub that connects all your farm sensors to the cloud.', price: '18,500 DZD', icon: '📡' },
  { id: 6, name: 'Crop Health Camera', desc: 'AI-powered camera that detects diseases and pest infestations early.', price: '22,000 DZD', icon: '📷' },
]

export default function ProductsPage() {
  return (
    <div style={{ padding: '60px', backgroundColor: '#f0fdf4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#14532d', marginBottom: '10px' }}>Our IoT Products</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '50px', fontSize: '1.1rem' }}>
        Smart devices built for Algerian farms — affordable, durable, and easy to install.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{p.icon}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#14532d', marginBottom: '10px' }}>{p.name}</h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>{p.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#16a34a', fontSize: '1.1rem' }}>{p.price}</span>
              <button style={{ backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}