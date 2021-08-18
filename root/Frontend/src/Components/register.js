import { Button, Modal, Form } from "react-bootstrap"
import axios from "axios"
import { useRef } from "react"

export function Register(props) {
    let emailRef = useRef()
    let pwRef = useRef()

    async function registerUser() {
        await axios.post('http://localhost:5000/auth/register',
            {
                email: emailRef.current.value,
                password: pwRef.current.value
            }
        )
        .then(response => {
            if (response.status === 200) {
                props.onHide()
            }   
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
      <>
        <Modal {...props} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" ref={emailRef} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={pwRef} required />
                </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-danger" onClick={props.onHide}>
              Cancel
            </Button>
            <Button variant="success" onClick={registerUser}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }