import { React, useState, useHistory, Link } from "react"
import {Navbar, NavDropdown, Container, Nav, Table, Col, Dropdown} from "react-bootstrap"
import trees from "../trees.svg"
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
        <Navbar bg="light" expand="lg">
            <Container>
                <Col xs={0} fluid="true">
                    <img src={trees} height={70} alt="some trees"></img>
                </Col>
                <Col sm={4}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Mens" id="basic-nav-dropdown">
                            <Table striped border hover size="sm">
                                <thead>
                                    <tr>
                                        <th><Nav.Link as={Link} to="/Mens/Tops">Tops</Nav.Link></th>
                                        <th><Nav.Link href="#Mens/Bottoms">Bottoms</Nav.Link></th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link href="#Mens/Shirts">Shirts</Nav.Link></td>
                                            <td><Nav.Link href="#Mens/Shorts">Shorts</Nav.Link></td>
                                        </tr>
                                        <tr>
                                            <td><Nav.Link href="#Mens/Hoodies">Hoodies</Nav.Link></td>
                                            <td><Nav.Link href="#Mens/Pants">Pants</Nav.Link></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </NavDropdown>
                        <NavDropdown title="Womens" id="basic-nav-dropdown">
                            <Table striped border hover size="sm">
                                <thead>
                                    <tr>
                                        <th><Nav.Link href="#Womens/Tops">Tops</Nav.Link></th>
                                        <th><Nav.Link href="#Womens/Bottoms">Bottoms</Nav.Link></th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link href="#Womens/Shirts">Shirts</Nav.Link></td>
                                            <td><Nav.Link href="#Womens/Shorts">Shorts</Nav.Link></td>
                                        </tr>
                                        <tr>
                                            <td><Nav.Link href="#Womens/Sweaters">Sweaters</Nav.Link></td>
                                            <td><Nav.Link href="#Womens/Pants">Pants</Nav.Link></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col sm={5}>
                    <Navbar.Brand href="#home"> E-Store </Navbar.Brand>
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
    ) : (
        <Navbar bg="light" expand="lg">
            <Container>
                <Col xs={0} fluid="true">
                    <img src={trees} height={70} alt="some trees"></img>
                </Col>
                <Col sm={4}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Mens" id="basic-nav-dropdown">
                            <Table striped border hover size="sm">
                                <thead>
                                    <tr>
                                        <th><Nav.Link href="#Mens/Tops">Tops</Nav.Link></th>
                                        <th><Nav.Link href="#Mens/Bottoms">Bottoms</Nav.Link></th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link href="#Mens/Shirts">Shirts</Nav.Link></td>
                                            <td><Nav.Link href="#Mens/Shorts">Shorts</Nav.Link></td>
                                        </tr>
                                        <tr>
                                            <td><Nav.Link href="#Mens/Hoodies">Hoodies</Nav.Link></td>
                                            <td><Nav.Link href="#Mens/Pants">Pants</Nav.Link></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </NavDropdown>
                        <NavDropdown title="Womens" id="basic-nav-dropdown">
                            <Table striped border hover size="sm">
                                <thead>
                                    <tr>
                                        <th><Nav.Link href="#Womens/Tops">Tops</Nav.Link></th>
                                        <th><Nav.Link href="#Womens/Bottoms">Bottoms</Nav.Link></th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link href="#Womens/Shirts">Shirts</Nav.Link></td>
                                            <td><Nav.Link href="#Womens/Shorts">Shorts</Nav.Link></td>
                                        </tr>
                                        <tr>
                                            <td><Nav.Link href="#Womens/Sweaters">Sweaters</Nav.Link></td>
                                            <td><Nav.Link href="#Womens/Pants">Pants</Nav.Link></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col sm={5}>
                    <Navbar.Brand href="#home"> E-Store </Navbar.Brand>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Cart </Dropdown.Item>
                            <Dropdown.Item onClick={() => logOutUser()}>Logout </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Container>
        </Navbar>
    )
}

export default Home