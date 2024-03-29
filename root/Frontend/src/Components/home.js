import { React, useState } from "react"
import {Navbar, NavDropdown, Container, Nav, Table, Badge, Row, Col, Dropdown, Button} from "react-bootstrap"
import trees from "../trees.svg"
import cart from "../cart.svg"
import { useAuth } from "../State Management/auth"
import { Login } from "./login"
import { Register } from "./register"
import axios from "axios" 
import { logoutURL } from "../config_url"

axios.defaults.withCredentials = true

function Home() {
    let auth = useAuth()
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    async function logOutUser() {
        await axios.post(logoutURL)
        .then(() => {
            auth.logOut()
        })
        .catch((error) => {
            auth.logOut()
            alert(error)
        })
    }
    
    return auth.user == "0" ? (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container fluid >
                    <Col sm={5}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Men's" id="basic-nav-dropdown">
                                    <Container fluid>
                                        <Table striped borderless size="md">
                                            <thead>
                                                <tr>
                                                    <th><Nav.Link href="/Mens/Tops">Tops</Nav.Link></th>
                                                    <th><Nav.Link href="/Mens/Bottoms">Bottoms</Nav.Link></th>
                                                </tr>
                                            </thead>
                                                <tr>
                                                    <td><Nav.Link href="/Mens/Tops/Shirts">Shirts</Nav.Link></td>
                                                    <td><Nav.Link href="/Mens/Bottoms/Shorts">Shorts</Nav.Link></td>
                                                </tr>
                                                <tr>
                                                    <td><Nav.Link href="/Mens/Tops/Hoodies">Hoodies</Nav.Link></td>
                                                    <td><Nav.Link href="/Mens/Bottoms/Pants">Pants</Nav.Link></td>
                                                </tr>
                                        </Table>
                                    </Container>
                                </NavDropdown>
                                <NavDropdown title="Women's" id="basic-nav-dropdown">
                                    <Container fluid bg="success">
                                        <Table borderless size="md">
                                            <thead>
                                                <tr>
                                                    <th><Nav.Link href="/Womens/Tops">Tops</Nav.Link></th>
                                                    <th><Nav.Link href="/Womens/Bottoms">Bottoms</Nav.Link></th>
                                                </tr>
                                            </thead>
                                                <tr>
                                                    <td><Nav.Link href="/Womens/Tops/Shirts">Shirts</Nav.Link></td>
                                                    <td><Nav.Link href="/Womens/Bottoms/Shorts">Shorts</Nav.Link></td>
                                                </tr>
                                                <tr>
                                                    <td><Nav.Link href="/Womens/Tops/Sweaters">Sweaters</Nav.Link></td>
                                                    <td><Nav.Link href="/Womens/Bottoms/Pants">Pants</Nav.Link></td>
                                                </tr>
                                        </Table>
                                    </Container>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col sm={6}>
                        <Navbar.Brand href="/">
                            <img src={trees} height={70} alt="some trees"></img>
                                E-Store 
                            <img src={trees} height={70} alt="some trees"></img>
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setShowLogin(true)}> Login </Dropdown.Item>
                                <Login show={showLogin} onHide={() => setShowLogin(false)}></Login>
                                <Dropdown.Item onClick={() => setShowRegister(true)}> Register </Dropdown.Item>
                                <Register show={showRegister} onHide={() => setShowRegister(false)}></Register>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Container>
            </Navbar>
            <Navbar fixed="bottom" expand="lg" bg="light">
                <Container fluid>
                    <Col xs={2}></Col>
                        <Col>
                            <Nav.Link href="#/about"> About Us </Nav.Link>
                        </Col>
                        <Col>
                            <Navbar.Text>© E-Store 2021</Navbar.Text>
                        </Col>
                        <Col>
                            <Nav.Link href="#/contact"> Contact </Nav.Link>
                        </Col>
                </Container>
            </Navbar>
        </>
    ) : (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Col sm={5}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <NavDropdown title="Men's" id="basic-nav-dropdown">
                                    <Container fluid>
                                        <Table striped borderless size="md">
                                            <thead>
                                                <tr>
                                                    <th><Nav.Link href="/Mens/Tops">Tops</Nav.Link></th>
                                                    <th><Nav.Link href="/Mens/Bottoms">Bottoms</Nav.Link></th>
                                                </tr>
                                            </thead>
                                                <tr>
                                                    <td><Nav.Link href="/Mens/Tops/Shirts">Shirts</Nav.Link></td>
                                                    <td><Nav.Link href="/Mens/Bottoms/Shorts">Shorts</Nav.Link></td>
                                                </tr>
                                                <tr>
                                                    <td><Nav.Link href="/Mens/Tops/Hoodies">Hoodies</Nav.Link></td>
                                                    <td><Nav.Link href="/Mens/Bottoms/Pants">Pants</Nav.Link></td>
                                                </tr>
                                        </Table>
                                    </Container>
                                </NavDropdown>
                                <NavDropdown title="Women's" id="basic-nav-dropdown">
                                    <Container fluid bg="success">
                                        <Table striped borderless size="md">
                                            <thead>
                                                <tr>
                                                    <th><Nav.Link href="/Womens/Tops">Tops</Nav.Link></th>
                                                    <th><Nav.Link href="/Womens/Bottoms">Bottoms</Nav.Link></th>
                                                </tr>
                                            </thead>
                                                <tr>
                                                    <td><Nav.Link href="/Womens/Tops/Shirts">Shirts</Nav.Link></td>
                                                    <td><Nav.Link href="/Womens/Bottoms/Shorts">Shorts</Nav.Link></td>
                                                </tr>
                                                <tr>
                                                    <td><Nav.Link href="/Womens/Tops/Sweaters">Sweaters</Nav.Link></td>
                                                    <td><Nav.Link href="/Womens/Bottoms/Pants">Pants</Nav.Link></td>
                                                </tr>
                                        </Table>
                                    </Container>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={6}>
                        <Navbar.Brand href="/">
                            <img src={trees} height={70} alt="some trees"></img>
                                E-Store 
                            <img src={trees} height={70} alt="some trees"></img>
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand href="/cart">
                            <img src={cart} height={30} alt="some trees"></img>
                            {auth.cart.length ? <Badge bg="success">{auth.cart.length}</Badge> : <Badge></Badge>}
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" onClick={() => logOutUser()}>Logout</Button>
                    </Col>
                </Container>
            </Navbar>
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                <Container fluid>
                    <Col xs={2}></Col>
                    <Col>
                        <Nav.Link href="#/about"> About Us </Nav.Link>
                    </Col>
                    <Col>
                        © E-Store 2021
                    </Col>
                    <Col>
                        <Nav.Link href="#/contact"> Contact </Nav.Link>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}

export default Home