import {Container, Navbar, Nav} from 'react-bootstrap';

function NavigationBar()
{
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Skate</Navbar.Brand>
                <Navbar.Toggle aria-controls="gearwheel-nav"/>
                <Navbar.Collapse id="gearwheel-nav">
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;