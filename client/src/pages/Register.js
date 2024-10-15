import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { register } from '../JS/Actions/user' 

const Register = () => {
  const [newUser , setNewUser] = useState ({})
  const dispatch = useDispatch()
  const navigate = useNavigate ()

  const handleChange = (e) => {
    setNewUser ( {...newUser , [e.target.name] : e.target.value } )
  }

  const handleUser = (e) => {
    e.preventDefault()
    dispatch (register(newUser))
    navigate ("/profile") ; 
  }
  return (
    <div>
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange} />
        <br/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email'  onChange={handleChange} />
        <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter password"  name='password'  onChange={handleChange} />
        <br/>
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number"  name ='phone'  onChange={handleChange} />
        <br/>
        <Button variant="primary" type="submit" onClick={handleUser}>
        Register
      </Button>
    </div>
  )
}

export default Register
