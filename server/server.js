import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

import authRoutes from './routes/authRoutes.js';
import sensorRoutes from './routes/sensorRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/products', productRoutes);

// Socket.io — real-time IoT
io.on('connection', (socket) => {
  console.log('IoT device connected:', socket.id);
  socket.on('sensor-data', (data) => {
    io.emit('update-dashboard', data); // broadcast to all clients
  });
  socket.on('disconnect', () => console.log('Device disconnected'));
});

// DB + Server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    httpServer.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));