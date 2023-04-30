import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    

    const {signUp} = useContext(AuthContext);
    const handleSignUp = event =>{
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value ;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email,password,confirmPassword)
        setError('')
        setSuccess('')
        if(password!=confirmPassword){
            setError('Did not match password')
            return;
        }
        if(password.length<6){
            setError('Password must be six character')
            return
        }
        signUp(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('User Created Successfully ')
            form.reset()
        }).catch(error=>{
            setError(error.message)
            return
        })
    }
  return (
    <div className="">
      <form onSubmit={handleSignUp}>
        <div className="form-container">
          <h4 className="form-title">Sign Up</h4>
          <p>Email</p>
          <input className="form-input" type="email" name="email" />
          <p>Password</p>
          <input className="form-input" type="password" name="password" />
          <p>Confirm Password</p>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
          />
          <input className="form-submit" type="submit" value="Sign Up" />
          {
            error && <p className="error-color">{error}</p>
          }
          {
            success && <p>{success}</p>
          }
          <p className="bottom-tittle">
            Already Have an Account ?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>{" "}
          </p>
          <p>
            <span className="border"></span>
            <span>or</span> <span className="border"></span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
