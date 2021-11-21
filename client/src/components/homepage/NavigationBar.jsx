import {Container, Navbar, Nav} from 'react-bootstrap';

function NavigationBar()
{
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Skate</Navbar.Brand>
                <Navbar.Toggle aria-controls="gearwheel-nav"/>
                <Navbar.Collapse id="gearwheel-nav">
                    <Nav className="me-auto">
                        <Nav.Link>communities</Nav.Link>
                        <Nav.Link>aboutUs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">login</Nav.Link>
                        <Nav.Link href="/signup">signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;