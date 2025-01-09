import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DietChartsList = () => {
  const [dietCharts, setDietCharts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all diet charts from the backend
  useEffect(() => {
    const fetchDietCharts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/diet/get-all'); // Update the API URL
        setDietCharts(response.data); // Set diet charts to state
        setLoading(false); // Stop loading
      } catch (error) {
        setError('Error fetching diet charts');
        setLoading(false);
      }
    };

    fetchDietCharts();
  }, []); // Empty dependency array to call this only once on mount

  if (loading) return <p>Loading diet charts...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Diet Charts</h2>
      <div className="row">
        {dietCharts.map((dietChart) => (
          <div key={dietChart._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">{dietChart.patientName}</h5>
              </div>
              <div className="card-body">
                <p><strong>Morning Meal:</strong> {dietChart.meals.morning}</p>
                <p><strong>Evening Meal:</strong> {dietChart.meals.evening}</p>
                <p><strong>Night Meal:</strong> {dietChart.meals.night}</p>
                {dietChart.instructions && (
                  <p><strong>Instructions:</strong> {dietChart.instructions}</p>
                )}
              </div>
              <div className="card-footer text-muted">
                <small>Diet Plan</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietChartsList;
