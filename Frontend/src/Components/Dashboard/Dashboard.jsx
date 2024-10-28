import React from 'react';
import './css/bootstrap.min.css.map'
import './css/custom.css'
import './css/bootstrap.min.css'
import DashboardTopNavBar from './DashboardTopNavBar';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <DashboardTopNavBar />
      <div className="wrapper">
        <DashboardSidebar />
        <div className="main-content">
          <Outlet /> {/* Render nested routes here */}
        </div>
      </div>
      <DashboardFooter />
    </>
  );
}

export default Dashboard;
