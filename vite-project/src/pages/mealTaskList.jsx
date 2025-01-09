import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealTaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/meal/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Update task status
  const updateTaskStatus = async (taskId, statusType, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/meal/tasks/${taskId}`, {
        [statusType]: newStatus,
      });
      fetchTasks(); // Refresh tasks after update
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Meal Tasks</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Patient</th>
            <th>Meal Type</th>
            <th>Diet Chart</th>
            {/* <th>Preparation Staff</th>
            <th>Delivery Staff</th> */}
            <th>Preparation Status</th>
            <th>Delivery Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.patientId?.name || 'Unknown'}</td>
              <td>{task.mealType}</td>
              <td>{task.dietChart?._id || 'N/A'}</td>
              {/* <td>{task.assignedStaff?.name || 'Unassigned'}</td>
              <td>{task.assignedDeliveryPersonnel?.name || 'Unassigned'}</td> */}
              <td>{task.preparationStatus}</td>
              <td>{task.deliveryStatus}</td>
              <td>
                {task.preparationStatus !== 'Completed' && (
                  <button
                    className={`btn ${
                      task.preparationStatus === 'Pending' ? 'btn-danger' : 'btn-success'
                    } me-2`}
                    onClick={() =>
                      updateTaskStatus(task._id, 'preparationStatus', 'Completed')
                    }
                  >
                    {task.preparationStatus === 'Pending'
                      ? 'Mark as Completed'
                      : 'Completed'}
                  </button>
                )}
                {task.deliveryStatus !== 'Delivered' && (
                  <button
                    className={`btn ${
                      task.deliveryStatus === 'Pending' ? 'btn-danger' : 'btn-success'
                    }`}
                    onClick={() =>
                      updateTaskStatus(task._id, 'deliveryStatus', 'Delivered')
                    }
                  >
                    {task.deliveryStatus === 'Pending'
                      ? 'Mark as Delivered'
                      : 'Delivered'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealTaskList;
