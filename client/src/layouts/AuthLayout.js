import React from 'react';

    function AuthLayout({ children }) {
      return (
        <div className="container">
          <h2>Neofin - Authentication</h2>
          {children}
        </div>
      );
    }

    export default AuthLayout;
