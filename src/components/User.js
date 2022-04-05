import React from 'react'
import Button from 'react-bootstrap/Button';

const User = (userData) => {
    console.log('----------')
    console.log(userData)

  return (
    <div>
        User
        <Button variant="outline-success" id = "button-test">Search</Button>
    </div>
  )
}

export default User