import { Container, Row, Col, Image } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import { useAuth } from "../State Management/auth"

export default function Cart() {
    let auth = useAuth()
    console.log(auth.cart)
    return (
        auth.user == "1" ?
        <Container>
            <hr/>
            {   auth.cart ? auth.cart.map(prod => (
                    <Row>
                        <Col>{prod.name}</Col>
                        <Col>{prod.description}</Col>
                        <Col>{prod.price}</Col>
                        <Image src={prod.image.data} roundedCircle />
                    </Row>
                ))
            : 
                <Row className="justify-content-center">
                    Cart is empty
                </Row>
            } 
            <hr/>
        </Container>
        : <Redirect to="/"></Redirect>
    )
}