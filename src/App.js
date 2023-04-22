import React, { useState } from "react";
import { Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';
import { Login} from "./login";
import { Signup } from "./signup";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }

  return (
    <div className="App">
       {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
       }
      
      
        <Routes>
        <Route path='/' element={<About />} />
        </Routes>
      
       
    </div>
  );
}

export default App;
