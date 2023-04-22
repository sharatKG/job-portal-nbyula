import React, { useState } from "react";

export const Login = () => {
    const [email, setEmaill] = useState('');
    const [pass, setPass] = useState('');
    return(
                <form>
           
                <input type="text" name="username" placeholder="Username" required/><br></br>
                 <input type="password" name="password" placeholder="Password" required/><br>f</br>
                <input type="submit" value="Login"/>
            
                </form>
    )

}
