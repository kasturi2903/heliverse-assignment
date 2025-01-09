import React, { useState } from 'react';
import axios from 'axios';

const AddDietChart = () => {
  const [patientName, setPatientName] = useState('');
  const [morning, setMorning] = useState('');
  const [evening, setEvening] = useState('');
  const [night, setNight] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send in the request
    const dietChartData = {
      patientName,
      morning,
      evening,
      night,
      instructions,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/diet/add', dietChartData);
      setSuccess('Diet chart added successfully');
      setError(null);
      // Reset form fields
      setPatientName('');
      setMorning('');
      setEvening('');
      setNight('');
      setInstructions('');
    } catch (error) {
      setSuccess(null);
      setError('Error adding diet chart');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Diet Chart for Patient</h2>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            className="form-control"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="morning" className="form-label">Morning Meal:</label>
          <input
            type="text"
            id="morning"
            className="form-control"
            value={morning}
            onChange={(e) => setMorning(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="evening" className="form-label">Evening Meal:</label>
          <input
            type="text"
            id="evening"
            className="form-control"
            value={evening}
            onChange={(e) => setEvening(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="night" className="form-label">Night Meal:</label>
          <input
            type="text"
            id="night"
            className="form-control"
            value={night}
            onChange={(e) => setNight(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions:</label>
          <textarea
            id="instructions"
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Diet Chart</button>
      </form>
    </div>
  );
};

export default AddDietChart;
