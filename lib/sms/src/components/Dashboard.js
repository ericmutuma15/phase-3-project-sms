import React from 'react';
import Navs from './NavBar'
import Overview from './Overview'
import Gallery from './Gallery'

const Dashboard = () => {
  return (
    <div>
      <Navs/>
      <Overview/>
      <Gallery/>
    </div>
  );
};

export default Dashboard;