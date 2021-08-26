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
                        <Row>
                            <Col><h1>{prod.name}</h1></Col>
                            <Col><h2>{prod.description}</h2></Col>
                            <Col><h3>{prod.price}</h3></Col>
                            <Col><Image src={prod.image.data} roundedCircle /></Col>
                        </Row>
                    ))
                : 
                    <Row className="justify-content-center">
                        Cart is empty
                    </Row>
                } 
                <hr/>
            </Container>
        : 
            <Redirect to="/"></Redirect>
    )
}