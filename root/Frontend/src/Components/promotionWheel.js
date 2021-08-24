import axios from "axios"
import { promotionURL } from "../config_url"
import { Carousel, Row, Col, Container } from "react-bootstrap"
import { arrayBufferToBase64 } from "../Misc/binToStrin"
import { useState, useEffect } from "react"

export default function PromotionWheel() {
    const [proms, setProms] = useState([])

    async function GetProms() {
        try {
            const res = await axios.get(promotionURL)
            const imgs = res.data.content
            
            if(res) {
                for (let i = 0; i < imgs.length; ++i) {
                    imgs[i].image.data = 'data:image/jpeg;base64,'+arrayBufferToBase64(imgs[i].image.data)
                }
            }
            setProms(imgs)
        }   catch (err) {
                alert(err)
        }
    }

    useEffect(() => {
        GetProms()
    }, [])

    return (
        <>
            <Container fluid>
                <Row xs={3} className="justify-content-md-center">
                    <Col>
                        <Carousel fade>
                            {proms ? proms.map((img) => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img.image.data}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{img.name}</h3>
                                        <p>{img.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )) : 
                            <h1>
                                Welcome to the store!
                            </h1>
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}