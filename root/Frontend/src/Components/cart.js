import { Container, Row, Col, Image, Button, Table, Modal } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import { useAuth } from "../State Management/auth"
import PaymentModal from "./paymentModal"
import { useState } from "react"

export default function Cart() {
    let auth = useAuth()
    const [showPay, setShowPay] = useState(false)

    return (
        auth.user == "1" ?
            <Container>
                <hr/>
                {   auth.cart.length ? auth.cart.map(prod => (
                        <div>
                            <Row>
                                <Col><h2>{prod.name}</h2></Col>
                                <Col><h3>{prod.price}</h3></Col>
                                <Col><Image className="cart-photo" src={prod.image.data} roundedCircle /></Col>
                                <Col>
                                    <Button variant="link" onClick={() => auth.removeFromCart(prod)}>remove</Button>
                                </Col>
                            </Row>
                            <hr/>
                        </div>
                    ))
                : 
                    <Row className="justify-content-center">
                        Cart is empty
                    </Row>
                } 
                {auth.cart.length ? 
                    <>  
                        <Row>
                            <Col xs={9}>
                                <Table>
                                    <thead>
                                        <th>
                                            Total    
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${auth.cart.reduce((total, product) => {
                                                return total + parseFloat(product.price.split('$')[1])
                                            }, 0)}
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Button variant="outline-success" onClick={() => setShowPay(true)}>Checkout</Button>
                                <PaymentModal show={showPay} onHide={() => setShowPay(false)}/>
                            </Col>
                            
                        </Row>
                    </>
                : 
                    <hr/>
                }
            </Container>
        : 
            <Redirect to="/"></Redirect>
    )
}