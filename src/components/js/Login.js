import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/Login.css'
const LoginComponent = () => {
 return (
    <div class="row justify-content-center">
      <div class="col-md-4 ">
        
     <form>
                <h1 className="text-center">Log In</h1>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgot password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have any account <a href='./Signup' >Sign up</a>
                </p>
            </form>
            </div>
            </div>

  )
}

export default LoginComponent;