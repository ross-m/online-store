import { Button, Modal, Form } from "react-bootstrap"
import { useAuth } from "../State Management/auth";
import axios from "axios"
import { useRef } from "react"
import { loginURL } from "../config_url";

export function Login(props) {
    let auth = useAuth()
    let emailRef = useRef()
    let pwRef = useRef()

    async function signIn() {
        await axios.post(loginURL,
            {
                email: emailRef.current.value,
                password: pwRef.current.value
            }
        )
        .then(response => {
            if (response.status === 200) {
                auth.logIn()
                props.onHide()
            }   else (
                    auth.logOut()
            )
        })
        .catch(err => {
            alert(err)
            auth.logOut()
        })
    }

    return (
      <>
        <Modal {...props} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
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
            <Button variant="dark" onClick={signIn}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }