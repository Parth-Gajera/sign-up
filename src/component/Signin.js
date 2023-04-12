import React from 'react'

import signin from "../img/Signin.jpg"

const Signin = () => {
  return (
    <div className="container" id="Signin">
    <div className="row r2" >
        <div className="col-md-6">
          <span className="signin"><img src={signin} alt="" width="100%" /></span>
        </div>
        <div className="col-md-6">
          <h1>Sign in </h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>


          <a className="btn btn-primary log" href="/Signin" role="button">Login</a>

          <div className="line">
            <hr className='line1' /> OR <hr className='line2' />
          </div>

          <div className="btnup mb-3">
            <a class="btn btn-primary " href="https://www.google.com/" role="button">Login with Google</a>
            <a class="btn btn-primary " href="https://www.facebook.com/" role="button">Login with Facebook</a>
          </div>

          <p className='text-center'>New user?
            <a href="/"> Signup </a></p>
        </div>
      </div>
    </div>
  )
}

export default Signin