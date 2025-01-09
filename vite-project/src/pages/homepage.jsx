import React from "react";

const Homepage = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ width: "100%" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Hospital Food Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#key-features">
                  Key Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Hospital Food Management System</h1>
          <p className="lead">
            Streamline patient care with personalized meal planning and
            efficient delivery tracking.
          </p>
          <a href="/get-started" className="btn btn-light btn-lg">
            Get Started
          </a>
        </div>
      </header>

      {/* Key Features Section */}
      <section id="key-features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Hospital Food Manager</h3>
              <ul>
                <li>Manage detailed patient records.</li>
                <li>
                  Create custom diet charts for Morning, Evening, and Night
                  meals.
                </li>
                <li>
                  Assign meal preparation and delivery tasks to inner pantry
                  staff.
                </li>
                <li>Monitor meal preparation and delivery statuses.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Inner Pantry</h3>
              <ul>
                <li>View assigned meal preparation tasks.</li>
                <li>Manage delivery personnel and assign meal boxes.</li>
                <li>Track meal deliveries in real-time.</li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h3>Delivery Personnel</h3>
              <ul>
                <li>View assigned meal boxes with patient details.</li>
                <li>Mark deliveries as completed with timestamps.</li>
                <li>Provide optional delivery notes.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Dashboards</h3>
              <ul>
                <li>Track all food deliveries and statuses.</li>
                <li>
                  Monitor pantry staff performance and receive issue alerts.
                </li>
                <li>Access real-time updates on preparation and delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            We aim to improve patient care through an efficient and personalized
            food management system. With real-time tracking and seamless
            dashboards, we empower hospitals to streamline meal preparation and
            delivery services.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p>&copy; 2024 Hospital Food Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
