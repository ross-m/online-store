import axios from "axios"
import { base } from "../config_url"
import { useState, useEffect } from "react"
import { arrayBufferToBase64 } from "../Misc/binToStrin"
import { Container, Col, Row, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useAuth } from "../State Management/auth"

export default function ProductDisplay() {
    const [prods, setProds] = useState([])
    let path = useParams()
    let auth = useAuth()

    async function GetProds() {
        try {
            const res = await axios.get(base + '/' + path.id)
            const products = res.data.content
            
            if(res) {
                for (let i = 0; i < products.length; ++i) {
                    products[i].image.data = 'data:image/jpeg;base64,'+arrayBufferToBase64(products[i].image.data)
                }
            }
            setProds(products)
        }   catch (err) {
                alert(err)
        }
    }

    useEffect(() => {
        GetProds()
    }, [])

    return (
        <Container>
            <Row>
                {prods ? prods.map(prod => (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="prod" src={prod.image.data} />
                        <Card.Body>
                        <Card.Title bold>{prod.name}</Card.Title>
                        <Card.Text>
                            {prod.price}
                        </Card.Text>
                        <Card.Text>
                            {prod.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => auth.addToCart(prod)}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                  </Col>
                    )) : 
                    <Col xs={6} md={4}>
                        <h2>Empty</h2>
                    </Col>
                }
            </Row>
        </Container>
    )
}