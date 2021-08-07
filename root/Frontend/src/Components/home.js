import React from "react"
import {Navbar, NavDropdown, Container, Nav, Table, Button, Col} from "react-bootstrap"

function Home() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Col xs={1}>
                    <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
                </Col>
                <Col sm={10}>
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
                                            <td><Nav.Link href="#Womens/Hoodies">Sweaters</Nav.Link></td>
                                            <td><Nav.Link href="#Womens/Pants">Pants</Nav.Link></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <Button variant="primary">Primary</Button>{' '}
                </Col>
            </Container>
        </Navbar>
    )
}

export default Home