const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  status: { type: String, default: 'Pending' }, // Pending, Delivered
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff' },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Delivery', DeliverySchema);
