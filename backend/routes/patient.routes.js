// routes/patientRoutes.js
const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();

// Endpoint to add a new patient
router.post('/add', async (req, res) => {
  const {
    name,
    age,
    gender,
    contact,
    emergencyContact,
    diseases,
    allergies,
    roomNumber,
    bedNumber,
    floorNumber,
  } = req.body;

  try {
    const newPatient = new Patient({
      name,
      age,
      gender,
      contact,
      emergencyContact,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ message: 'Error adding patient' });
  }
});

router.get('/get-all', async (req, res) => {
    try {
      // Fetch all patients from the database
      const patients = await Patient.find();
      res.json(patients); // Send the patient data as a JSON response
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch patients', error: error.message });
    }
  });

module.exports = router;
