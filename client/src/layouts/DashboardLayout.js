import React from 'react';

    function DashboardLayout({ children }) {
      return (
        <div className="container">
          <h1>Neofin - Dashboard</h1>
          {children}
        </div>
      );
    }

    export default DashboardLayout;
