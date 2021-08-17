import { Button, Modal, Form } from "react-bootstrap"
import { useAuth } from "../State Management/auth";

export function Login(props) {
    let auth = useAuth()

    function signIn() {
        auth.logIn()
        props.onHide()
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
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-danger" onClick={props.onHide}>
              Cancel
            </Button>
            <Button variant="success" onClick={signIn}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }