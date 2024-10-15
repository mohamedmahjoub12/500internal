import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector ( (state) => state.userReducer.user) ; 
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user && user.name}</Card.Title>
       
        <Card.Text>{user && user.email}</Card.Text>
        <Card.Text>{user && user.phone}</Card.Text>
      
        <Button variant='primary'>GO SOM</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile
