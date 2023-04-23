import React, { useState } from "react";
import { Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import navbar from './components/Navbar';
import { Login} from "./login";
import { Signup } from "./signup";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }

  return (
      
    <div className="App">

  <navbar />

      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/About' element={<About />} />

      </Routes>
   
      </div>
  );
}

export default App;
