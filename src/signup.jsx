import React, { useState } from "react";
export const Signup = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
             <label for="email">ema</label>
             <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="youremail@gmail.com" required/><br></br>
             <label for="password">password</label>
                <input onChange={(e) => setPass(e.target.value)} type="password" name="password" placeholder="********" id="password" required/><br></br>
                <button type="submit">Log In</button>
            </form>
            <button>Don't have an account? Register here.</button>
           </> 
    )

}
