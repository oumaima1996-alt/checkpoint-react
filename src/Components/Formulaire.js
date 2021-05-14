import React from 'react'
//import Form from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';

const Formulaire = () => {
    return (
        <div className = "Formulaire">
            <Form>

            <Form.Group controlId="formBasicName">
    <Form.Label> First Name</Form.Label>
    <Form.Control  className = "Name " type="text" placeholder="Enter your first name" />
    <Form.Text className="text-muted">
      We'll never share your info with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicName">
    <Form.Label> Last Name</Form.Label>
    <Form.Control  className = "Name" type="text" placeholder="Enter your Last name" />
    <Form.Text className="text-muted">
      We'll never share your info with anyone else.
    </Form.Text>

  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control   className = "Name" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  className = "Name" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<textarea placeholder = "suggestions"></textarea>
            
</div>
    )
}

export default Formulaire
