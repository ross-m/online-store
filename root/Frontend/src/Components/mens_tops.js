import axios from "axios"
import { mensTopsURL } from "../config_url"
import { useState, useEffect } from "react"
import { arrayBufferToBase64 } from "../Misc/binToStrin"
import { Container, Image, Col, Row, Card, Button } from "react-bootstrap"

export default function MensTops() {

    const [mensTops, setMensTops] = useState([])
    
    async function GetMensTops() {
        try {
            const res = await axios.get(mensTopsURL)
            const imgs = res.data.content

            if(res) {
                for (let i = 0; i < imgs.length; ++i) {
                    imgs[i] = 'data:image/jpeg;base64,'+arrayBufferToBase64(imgs[i].image.data)
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
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={top} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                    )) : 
                    <Col xs={6} md={4}>
                        <h2>Empty</h2>
                    </Col>
                }
            </Row>
        </Container>
    )
}