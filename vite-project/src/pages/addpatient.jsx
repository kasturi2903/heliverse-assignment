// src/components/AddPatient.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    emergencyContact: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/patient/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error adding patient');
      }

      setSuccess('Patient added successfully!');
      setFormData({
        name: '',
        age: '',
        gender: '',
        contact: '',
        emergencyContact: '',
        diseases: '',
        allergies: '',
        roomNumber: '',
        bedNumber: '',
        floorNumber: '',
      }); // Clear form after successful submission
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-5">Add Patient</h2>
          <Form onSubmit={handleSubmit} className="mt-4 shadow p-4 bg-light rounded">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient's name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge" className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter patient's age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formContact" className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient's contact number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmergencyContact" className="mb-3">
              <Form.Label>Emergency Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter emergency contact number"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDiseases" className="mb-3">
              <Form.Label>Diseases</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient's diseases (comma separated)"
                name="diseases"
                value={formData.diseases}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAllergies" className="mb-3">
              <Form.Label>Allergies</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient's allergies (comma separated)"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formRoomNumber" className="mb-3">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter room number"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBedNumber" className="mb-3">
              <Form.Label>Bed Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bed number"
                name="bedNumber"
                value={formData.bedNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formFloorNumber" className="mb-3">
              <Form.Label>Floor Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter floor number"
                name="floorNumber"
                value={formData.floorNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Add Patient
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPatient;
