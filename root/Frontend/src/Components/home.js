import { React, useState } from "react"
import {Navbar, NavDropdown, Container, Nav, Table, Row, Col, Dropdown, Button} from "react-bootstrap"
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
            console.log(error)
            alert(error)
        })
    }

    return !auth.user ? (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Col sm={5}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Mens" id="basic-nav-dropdown">
                                    <Table striped border hover size="sm">
                                        <thead>
                                            <tr>
                                                <th><Nav.Link href="/Mens/Tops">Tops</Nav.Link></th>
                                                <th><Nav.Link href="/Mens/Bottoms">Bottoms</Nav.Link></th>
                                            </tr>
                                        </thead>
                                            <tr>
                                                <td><Nav.Link href="/Mens/Shirts">Shirts</Nav.Link></td>
                                                <td><Nav.Link href="/Mens/Shorts">Shorts</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td><Nav.Link href="/Mens/Hoodies">Hoodies</Nav.Link></td>
                                                <td><Nav.Link href="/Mens/Pants">Pants</Nav.Link></td>
                                            </tr>
                                    </Table>
                                </NavDropdown>
                                <NavDropdown title="Womens" id="basic-nav-dropdown">
                                    <Table striped border hover size="sm">
                                        <thead>
                                            <tr>
                                                <th><Nav.Link href="/Womens/Tops">Tops</Nav.Link></th>
                                                <th><Nav.Link href="/Womens/Bottoms">Bottoms</Nav.Link></th>
                                            </tr>
                                        </thead>
                                            <tr>
                                                <td><Nav.Link href="/Womens/Shirts">Shirts</Nav.Link></td>
                                                <td><Nav.Link href="/Womens/Shorts">Shorts</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td><Nav.Link href="/Womens/Sweaters">Sweaters</Nav.Link></td>
                                                <td><Nav.Link href="/Womens/Pants">Pants</Nav.Link></td>
                                            </tr>
                                    </Table>
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
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
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
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                <Container fluid>
                    <Col xs={2}></Col>
                        <Col>
                            <Nav.Link href="#/about"> About </Nav.Link>
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
    ) : (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Col sm={5}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Mens" id="basic-nav-dropdown">
                                    <Table striped border hover size="sm">
                                        <thead>
                                            <tr>
                                                <th><Nav.Link href="/Mens/Tops">Tops</Nav.Link></th>
                                                <th><Nav.Link href="/Mens/Bottoms">Bottoms</Nav.Link></th>
                                            </tr>
                                        </thead>
                                            <tr>
                                                <td><Nav.Link href="/Mens/Shirts">Shirts</Nav.Link></td>
                                                <td><Nav.Link href="/Mens/Shorts">Shorts</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td><Nav.Link href="/Mens/Hoodies">Hoodies</Nav.Link></td>
                                                <td><Nav.Link href="/Mens/Pants">Pants</Nav.Link></td>
                                            </tr>
                                    </Table>
                                </NavDropdown>
                                <NavDropdown title="Womens" id="basic-nav-dropdown">
                                    <Table striped border hover size="sm">
                                        <thead>
                                            <tr>
                                                <th><Nav.Link href="/Womens/Tops">Tops</Nav.Link></th>
                                                <th><Nav.Link href="/Womens/Bottoms">Bottoms</Nav.Link></th>
                                            </tr>
                                        </thead>
                                            <tr>
                                                <td><Nav.Link href="/Womens/Shirts">Shirts</Nav.Link></td>
                                                <td><Nav.Link href="/Womens/Shorts">Shorts</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td><Nav.Link href="/Womens/Sweaters">Sweaters</Nav.Link></td>
                                                <td><Nav.Link href="/Womens/Pants">Pants</Nav.Link></td>
                                            </tr>
                                    </Table>
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
                        <Navbar.Brand href="#/cart">
                            <img src={cart} height={30} alt="some trees"></img>
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
                        <Nav.Link href="#/about"> About </Nav.Link>
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