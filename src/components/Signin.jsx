import axios from 'axios'
import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()


  // functios to post the data on the database
  const submit = async (e) => {
    // prevant the form default behaviour of reloading
    e.preventDefault()
    // updating the loading message
    setLoading("please wait as we log you in")
    // adding user inputs to the database
    try {
      // sroring the user inputs in data variables
      const data = new FormData()
      data.append("email", email)
      data.append("password", password)
      // posting user input into the database
      const response = await axios.post("http://dumaelphus.alwaysdata.net/api/signin", data)
      // updating error massage to empty
      setLoading("")
      // checking if the user exists
      if (response.data.user) {
        // adding the user to the browser local storage
        localStorage.setItem("user", JSON.stringify(response.data.user))
        // redirecting user to the landing page 
        navigate("/")
      }
      else{
        // if the login fails
        setError(response.data.message)
      }
    } catch (error) {
      // updating loading message to empty
      setLoading("")
      // updatimg error massage 
      setError(error.response.data.message)
      
    }

  }
  return (
    <div className='row mt-4 justify-content-center '>
        
        <div className='col-md-6 card shadow p-4 bg-warning'>
          <form onSubmit={submit}>
          {loading}            
            {error}
            <h2>ⓢⓘⓖⓝ ⓘⓝ</h2>
            <fieldset>
              <input type="email" placeholder="Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />


              <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />

              {/* the button */}
            <button className='btn btn-primary bg-success' type='submit'>
              signin
            </button>


            <p>Dont have na account? <Link to = "/Signup" className='text-danger' >Sign up</Link></p>
            </fieldset>
          </form>
        </div>
    </div>
  )
}

export default Signin