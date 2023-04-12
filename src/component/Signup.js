import React from 'react'

import signup from "../img/Signup.jpg"

const Signup = () => {
  return (
    <div className="container" id="signup">
      <div className="row r1" >
        <div className="col-md-6">
          <span className="signup"><img src={signup} alt="" width="100%" /></span>
        </div>
        <div className="col-md-6">
          <h1>Create New Account</h1>

          <div className="form-floating  mb-3  ">
            <input type="text" className="form-control " id="floatingFirst" placeholder="Username" />
            <label for="floatingFirst">Username</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              I agree with <a href='/'  style={{ "text-decoration": 'underline' }}> Term & Condition </a>
            </label>
          </div>

          <a href="/Signin" role="button" className='btn btn-primary create'>Create Account</a>

          <div className="line">
            <hr className='line1' /> OR <hr className='line2' />
          </div>

          <div className="btnup mb-3">
            <a class="btn btn-primary " href="https://www.google.com/" role="button">Signup with Google</a>
            <a class="btn btn-primary " href="https://www.facebook.com/" role="button">Signup with Facebook</a>
          </div>

          <p className='text-center'>Joined us before?
            <a href="/Signin"> Signin </a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup