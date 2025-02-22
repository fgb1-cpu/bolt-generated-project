import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Dashboard from './pages/Dashboard';
    import Portfolio from './pages/Portfolio';
    import Trading from './pages/Trading';
    import Analytics from './pages/Analytics';
    import AiInsights from './pages/AiInsights';
    import Settings from './pages/Settings';
    import Wallet from './pages/Wallet';
    import Login from './pages/Auth/Login';
    import Register from './pages/Auth/Register';
    import ForgotPassword from './pages/Auth/ForgotPassword';
    import NotFound from './pages/NotFound';
    import AuthLayout from './layouts/AuthLayout';
    import DashboardLayout from './layouts/DashboardLayout';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
            <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/portfolio" element={<DashboardLayout><Portfolio /></DashboardLayout>} />
            <Route path="/trading" element={<DashboardLayout><Trading /></DashboardLayout>} />
            <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
            <Route path="/ai-insights" element={<DashboardLayout><AiInsights /></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
            <Route path="/wallet" element={<DashboardLayout><Wallet /></DashboardLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      );
    }

    export default App;
