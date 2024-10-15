import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/user';

const Login = () => {
  const [user , setUser ] = useState ({}) ;
  const dispatch = useDispatch()
  const navigate = useNavigate ()

  const handleChange = (e) => {
    setUser ( {...user , [e.target.name] : e.target.value } )
  }

  const handleUser = (e) => {
    e.preventDefault()
    dispatch (login(user))
    navigate ("/profile") ; 
  }
  return (
    <div>
     <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' onChange={handleChange} />
        <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter password"  name='password' onChange={handleChange}/>
        <br/>
        <Button variant="primary" type="submit" onClick={handleUser}>
        login
      </Button>
    </div>
  )
}

export default Login
