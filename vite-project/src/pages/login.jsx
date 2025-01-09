import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '' // New state for role
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error message on input change
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the login credentials as JSON
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      setSuccess('Login successful!');
      // Save JWT token, email, and role to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', formData.email);
      localStorage.setItem('role', formData.role); // Save role in localStorage

      // Redirect to different dashboards based on role
      if (formData.role === 'hospitalManager') {
        navigate('/hospital-manager-dashboard');
      } else if (formData.role === 'pantryStaff') {
        navigate('/pantry-staff-dashboard');
      } else if (formData.role === 'deliveryPersonnel') {
        navigate('/delivery-personnel-dashboard');
      } else {
        navigate('/dashboard'); // Default dashboard if no role is selected
      }
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-5">Login</h2>
          <Form onSubmit={handleSubmit} className="mt-4 shadow p-4 bg-light rounded">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* New Form Group for role selection */}
            <Form.Group controlId="formRole" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select role</option>
                <option value="hospitalManager">Hospital Manager</option>
                <option value="pantryStaff">Pantry Staff</option>
                <option value="deliveryPersonnel">Delivery Personnel</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/register">Sign up here</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
