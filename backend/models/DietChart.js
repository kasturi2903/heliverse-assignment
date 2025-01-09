const mongoose = require('mongoose');

const DietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  meals: {
    morning: { type: String },
    evening: { type: String },
    night: { type: String },
  },
  instructions: { type: String },
});

module.exports = mongoose.model('DietChart', DietChartSchema);
