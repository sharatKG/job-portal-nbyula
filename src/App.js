import React, { useState } from "react";
import { Router ,Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './component/About';
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
      
       {
        <Router>
          <switch>        
            <Route path='/' element={<About />} />
          </switch>
        </Router>
       }
       
    </div>
  );
}

export default App;
