const mongoose = require('mongoose');

const MealTaskSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  mealType: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
  dietChart: { type: mongoose.Schema.Types.ObjectId, ref: 'DietChart', required: true },
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff' },
  assignedDeliveryPersonnel: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff' }, // For delivery personnel
  preparationStatus: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  deliveryStatus: { type: String, enum: ['Pending', 'Delivered'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MealTask', MealTaskSchema);
