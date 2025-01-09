const mongoose = require('mongoose');

const PantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, enum: ['Preparation', 'Delivery'], required: true }, // Staff role
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PantryStaff', PantryStaffSchema);
