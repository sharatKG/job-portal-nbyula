import React, { useState } from "react";
export const Signup = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className = "auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlfor="name">fullname</label>
            <input value={name} name="name" id="name" placeholder="fullname" />
             <label htmlfor="email">ema</label>
             <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="youremail@gmail.com" required/><br></br>
             <label htmlfor="password">password</label>
                <input onChange={(e) => setPass(e.target.value)} type="password" name="password" placeholder="********" id="password" required/><br></br>
                <button type="submit">Log In</button>
            </form>
            <button onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login here.</button>
           </div> 
    )

}
