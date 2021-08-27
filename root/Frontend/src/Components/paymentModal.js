import { Modal, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap"

export default function PaymentModal(props) {

    return (
        <Modal {...props} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Card Number</InputGroup.Text>            
                        <FormControl
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            aria-label="xxxx-xxxx-xxxx-xxxx"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br/>
                    <Row>
                        <Col>
                            <InputGroup>
                            <InputGroup.Text id="basic-addon1">CVV</InputGroup.Text>            
                            <FormControl
                                placeholder="xxx"
                                aria-label="xxx"
                                aria-describedby="basic-addon1"
                            />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Expiry</InputGroup.Text>            
                                <FormControl
                                    placeholder="mm/yy"
                                    aria-label="mm/yy"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Cancel</Button>
                    <Button variant="success">Pay</Button>
                </Modal.Footer>
        </Modal>
    )
}