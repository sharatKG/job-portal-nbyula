import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }
    return(
        <div className = "auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
             <label htmlfor="email">email</label>
             <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="youremail@gmail.com" required/><br></br>
             <label htmlfor="password">password</label>
                <input onChange={(e) => setPass(e.target.value)} type="password" name="password" placeholder="********" id="password" required/><br></br>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn"onClick={()=>props.onFormSwitch('signup')}>Don't have an account? Register here.</button>
           </div> 
        )

}
