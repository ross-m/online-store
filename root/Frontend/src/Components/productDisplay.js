import axios from "axios"
import { base } from "../config_url"
import { useState, useEffect } from "react"
import { arrayBufferToBase64 } from "../Misc/binToStrin"
import { Container, Col, Row, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function ProductDisplay() {

    const [mensTops, setMensTops] = useState([])
    let path = useParams()

    async function GetMensTops() {
        try {
            const res = await axios.get(base + '/' + path.id)
            const imgs = res.data.content
            
            if(res) {
                for (let i = 0; i < imgs.length; ++i) {
                    imgs[i].image.data = 'data:image/jpeg;base64,'+arrayBufferToBase64(imgs[i].image.data)
                }
            }
            setMensTops(imgs)
        }   catch (err) {
                alert(err)
        }
    }

    useEffect(() => {
        GetMensTops()
    }, [])

    return (
        <Container>
            <Row>
                {mensTops ? mensTops.map(top => (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={top.image.data} />
                        <Card.Body>
                        <Card.Title bold>{top.name}</Card.Title>
                        <Card.Text>
                            {top.description}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
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