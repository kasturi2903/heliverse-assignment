const express = require('express');
const router = express.Router();
const MealTask = require('../models/MealTask');
const { assignMealTask, updatePreparationStatus, updateDeliveryStatus } = require('../controllers/mealTaskController');

// Route to assign a meal task
router.post('/assign', async (req, res) => {
  try {
    const { patientName, mealType, dietChartId, prepStaffName, deliveryStaffName } = req.body;
    const mealTask = await assignMealTask(patientName, mealType, dietChartId, prepStaffName, deliveryStaffName);
    res.status(201).json(mealTask);
  } catch (error) {
    res.status(500).json({ message: 'Error assigning meal task', error: error.message });
  }
});

// Route to update preparation status
router.put('/updatePreparationStatus', async (req, res) => {
  try {
    const { mealTaskId, status } = req.body;
    const updatedTask = await updatePreparationStatus(mealTaskId, status);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating preparation status', error: error.message });
  }
});

// Route to update delivery status
router.put('/updateDeliveryStatus', async (req, res) => {
  try {
    const { mealTaskId, status } = req.body;
    const updatedTask = await updateDeliveryStatus(mealTaskId, status);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating delivery status', error: error.message });
  }
});
router.get('/tasks', async (req, res) => {
    try {
      const tasks = await MealTask.find()
        .populate('patientId', 'name') // Populate patient name
        .populate('dietChart') // Populate diet chart
        .populate('assignedStaff', 'name') // Populate staff name
        .populate('assignedDeliveryPersonnel', 'name'); // Populate delivery personnel name
      res.json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;
  
    try {
      const updatedTask = await MealTask.findByIdAndUpdate(id, updateFields, { new: true });
      res.json(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;
