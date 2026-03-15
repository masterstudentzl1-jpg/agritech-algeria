import mongoose from 'mongoose';
const cropSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  location: String,
  plantedDate: Date,
  status: { type: String, default: 'growing' },
  notes: String
}, { timestamps: true });
export default mongoose.model('Crop', cropSchema);