import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login} from "./login";
import { Signup } from "./signup";

function App() {
  const [currentForm,setcurrentForm] = useState('login');

  return (
    <div className="App">
      {
        currentForm == "login" ? <login /> : <register />
      }
        </div>
  );
}

export default App;
