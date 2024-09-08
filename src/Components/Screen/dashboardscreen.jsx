import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import dashboardscreen from './dashboardscreen/'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
