import {Container, Navbar, Nav} from 'react-bootstrap';
import navigationStyles from './NavigationBar.module.css';

function NavigationBar()
{
    return(
        <Navbar bg="light" expand="sm" sticky="top">
            <Container>
                <Navbar.Brand href="/"><p className={navigationStyles.logo}>Skate</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="gearwheel-nav"/>
                <Navbar.Collapse id="gearwheel-nav" className="justify-content-end">
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