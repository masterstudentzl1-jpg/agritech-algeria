import mongoose from 'mongoose';
const sensorSchema = new mongoose.Schema({
  cropId: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop' },
  temperature: Number,
  humidity: Number,
  soilMoisture: Number,
  lightLevel: Number,
  recordedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Sensor', sensorSchema);