import type { NextPage } from 'next'
import Router from 'next/router'
import React, { useState } from 'react'
import useToken from '../hooks/useToken'
import { loginUser } from '../lib/auth'

const Login: NextPage = () => {
  const { token, setToken } = useToken()
  const [ email, setEmail ]: any = useState()
  const [ password, setPassword ]: any = useState()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const token = await loginUser({
      email,
      password
    })

    if (token.access_token) {
      setToken(token)
      Router.push('/')
    }
  }

  return (
    <div id="login">
      <div className="container-fluid d-flex vh-100">
        <div className="row mx-auto my-auto justify-content-center">
          <div className="col-10">
            <div className="bg-primary text-white text-center p-4">
              <h3 className="mb-0">Truth or dare</h3>
              <p className="mb-0">Admin Panel</p>
            </div>
            <div className="card border-0 bg-dark shadow-lg pt-4 pb-5 px-4">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <h6 className="card-subtitle mb-2 text-center text-muted px-4 pb-4">Enter your email address and password to access admin panel.</h6>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="inputEmail" className="form-label fw-bolder">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="inputPassword" className="form-label fw-bolder">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} id="inputPassword"></input>
                  </div>
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mx-auto">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-2 text-center">
            <small className="text-muted"><i aria-hidden className="far fa-copyright"></i> 2021 Truth or Dare</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
