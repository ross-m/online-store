import { Container, Row, Col, Image } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import { useAuth } from "../State Management/auth"

export default function Cart() {
    let auth = useAuth()
    
    return (
        auth.user == "1" ?
            <Container>
                <hr/>
                {   auth.cart ? auth.cart.map(prod => (
                        <div>
                        <Row>
                            <Col><h1>{prod.name}</h1></Col>
                            <Col><h3>{prod.price}</h3></Col>
                            <Col><Image className="cart-photo" src={prod.image.data} roundedCircle /></Col>
                        </Row>
                        <hr/>
                        </div>
                    ))
                : 
                    <Row className="justify-content-center">
                        Cart is empty
                    </Row>
                } 
            </Container>
        : 
            <Redirect to="/"></Redirect>
    )
}