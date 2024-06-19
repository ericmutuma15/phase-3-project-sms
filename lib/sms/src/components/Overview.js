import React from 'react';
import './style.css';

const StudentOverview = () => {
  return (
    <div className="overview">
      <h2>Student Overview</h2>
      <div className="stats">
        <div className="card">
          <h3>Total Students</h3>
          <p>1200</p>
        </div>
        <div className="card">
          <h3>New Admissions</h3>
          <p>50</p>
        </div>
        <div className="card">
          <h3>Graduates</h3>
          <p>200</p>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;