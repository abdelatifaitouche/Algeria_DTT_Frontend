import './App.css';
import NavBar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from './pages/Chatbot';
import Redevences from './pages/Redevences';
import React from 'react';
import { Link } from "react-router-dom";
import Service from './Services/Service';
import Login from './pages/Login';
import { Logout } from './components/Logout';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Test_dashboard from './pages/Test_dashboard';

function App() {

  
  //make the API call here and pass the data needed thru the props of the objects


  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/dashboard' element={<PrivateRoutes><Test_dashboard /></PrivateRoutes>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>


    </div>


  );
}

export default App;
/*

<NavBar />
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PrivateRoutes><Service /></PrivateRoutes>} />
          <Route path='/chatbot' element={<PrivateRoutes><Chatbot /></PrivateRoutes>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>


*/