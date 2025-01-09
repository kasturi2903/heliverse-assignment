const MealTask = require('../models/MealTask');
const PantryStaff = require('../models/PantryStaff');
const DietChart = require('../models/DietChart');
const Patient = require('../models/Patient'); // Import the Patient model
const User = require('../models/User')

// Function to assign meal task to pantry staff for preparation and delivery personnel for delivery by staff name and patient name
async function assignMealTask(patientName, mealType, dietChartId, prepStaffName, deliveryStaffName) {
  try {
    // Find the patient by name
    const patient = await Patient.findOne({ name: patientName });
    if (!patient) {
      throw new Error('Patient not found');
    }

    // Find the preparation and delivery staff by their names
    const prepStaff = await User.findOne({ name: prepStaffName });
    const deliveryStaff = await User.findOne({ name: deliveryStaffName });

    if (!prepStaff || !deliveryStaff) {
      throw new Error('Preparation staff or delivery staff not found');
    }

    // Create a new meal task with the assigned staff for preparation and delivery
    const mealTask = new MealTask({
      patientId: patient._id, // Assign patient by ID
      mealType,
      dietChart: dietChartId,
      assignedStaff: prepStaff._id, // Assign prep staff by ID
      assignedDeliveryPersonnel: deliveryStaff._id, // Assign delivery staff by ID
      preparationStatus: 'Pending', // Initial status
      deliveryStatus: 'Pending', // Initial status
    });

    // Save the meal task to the database
    await mealTask.save();
    console.log('Meal Task Assigned Successfully:', mealTask);
    return mealTask;
  } catch (error) {
    console.error('Error Assigning Meal Task:', error);
    throw error;
  }
}

// Function to update preparation status of a meal task
async function updatePreparationStatus(mealTaskId, status) {
  try {
    // Find the meal task by ID
    const mealTask = await MealTask.findById(mealTaskId);
    if (mealTask) {
      // Update the preparation status
      mealTask.preparationStatus = status;
      await mealTask.save();
      console.log('Preparation Status Updated:', mealTask);
      return mealTask;
    } else {
      throw new Error('Meal task not found');
    }
  } catch (error) {
    console.error('Error updating preparation status:', error);
    throw error;
  }
}

// Function to update delivery status of a meal task
async function updateDeliveryStatus(mealTaskId, status) {
  try {
    // Find the meal task by ID
    const mealTask = await MealTask.findById(mealTaskId);
    if (mealTask) {
      // Update the delivery status
      mealTask.deliveryStatus = status;
      await mealTask.save();
      console.log('Delivery Status Updated:', mealTask);
      return mealTask;
    } else {
      throw new Error('Meal task not found');
    }
  } catch (error) {
    console.error('Error updating delivery status:', error);
    throw error;
  }
}

module.exports = {
  assignMealTask,
  updatePreparationStatus,
  updateDeliveryStatus,
};
