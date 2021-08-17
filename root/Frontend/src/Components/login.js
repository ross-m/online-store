import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export function Login(props) {
    
    return (
      <>
        <Modal {...props}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={props.onHide}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }