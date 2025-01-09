const express = require('express');
const router = express.Router();
const DietChart = require('../models/DietChart');
const Patient = require('../models/Patient'); // Assuming you have a Patient model

// POST request to add a diet chart for a patient using their name
router.post('/add', async (req, res) => {
  const { patientName, morning, evening, night, instructions } = req.body;

  // Ensure the patient exists in the database by name
  const patient = await Patient.findOne({ name: patientName });
  if (!patient) {
    return res.status(404).json({ message: 'Patient not found' });
  }

  // Create a new diet chart for the patient
  const dietChart = new DietChart({
    patientId: patient._id,  // Link diet chart to patient using _id
    meals: {
      morning,
      evening,
      night,
    },
    instructions, // Any specific instructions like no salt, low sugar, etc.
  });

  try {
    await dietChart.save();
    res.status(201).json({ message: 'Diet chart added successfully', dietChart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get('/get-all', async (req, res) => {
    try {
      const dietCharts = await DietChart.find().populate('patientId'); // Populate patient data if necessary
      res.json(dietCharts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching diet charts' });
    }
  });
module.exports = router;
