import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const socket = io('http://localhost:5000')

export default function DashboardPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    socket.on('update-dashboard', (newData) => {
      setData(prev => [...prev.slice(-20), { ...newData, time: new Date().toLocaleTimeString() }])
    })
    return () => socket.off('update-dashboard')
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Live Farm Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        {['temperature', 'humidity', 'soilMoisture', 'lightLevel'].map(key => (
          <div key={key} className="bg-white rounded-xl shadow p-4">
            <h2 className="capitalize text-lg font-semibold mb-2">{key}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="time" hide />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={key} stroke="#16a34a" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  )
}