import React, { useState } from "react";
import axios from "axios";

const AssignMealForm = () => {
  const [patientName, setPatientName] = useState("");
  const [mealType, setMealType] = useState("Morning");
  const [dietChartId, setDietChartId] = useState("");
  const [prepStaffName, setPrepStaffName] = useState("");
  const [deliveryStaffName, setDeliveryStaffName] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/meal/assign", {
        patientName,
        mealType,
        dietChartId,
        prepStaffName,
        deliveryStaffName,
      });

      console.log("Meal Task Assigned Successfully:", response.data);
      // Optionally, show success message or clear the form here
    } catch (error) {
      console.error("Error assigning meal task:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Assign Meal Task</h3>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Patient Name:</label>
          <input
            type="text"
            className="form-control"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meal Type:</label>
          <select
            className="form-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
          >
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Diet Chart ID:</label>
          <input
            type="text"
            className="form-control"
            value={dietChartId}
            onChange={(e) => setDietChartId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preparation Staff Name:</label>
          <input
            type="text"
            className="form-control"
            value={prepStaffName}
            onChange={(e) => setPrepStaffName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Delivery Staff Name:</label>
          <input
            type="text"
            className="form-control"
            value={deliveryStaffName}
            onChange={(e) => setDeliveryStaffName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Assign Meal
        </button>
      </form>
    </div>
  );
};

export default AssignMealForm;
