import {Container, Navbar, Nav} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import navigationStyles from './NavigationBar.module.css';
import { useApiContext, useAuthState, useAuthDispatch } from '../AppContext';
import { logout } from "../authorization/AuthorizationHandler";


function NavigationBar()
{
    const currentUser = useAuthState();
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
    }

    function checkLogin() {
        if (currentUser.id != undefined) {
            let profile_path = "/profile?id=" + currentUser.id;
            return (
                <Nav>
                    <Nav.Link href={profile_path}>Profile</Nav.Link>
                    <Nav.Link href="/" onClick={handleLogout}>LogOut</Nav.Link>
                </Nav>
            )
        }
    
        return (
            <Nav>
                <Nav.Link href="/login">login</Nav.Link>
                <Nav.Link href="/signup">signup</Nav.Link>
            </Nav>
        )
    };

    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/"><p className={navigationStyles.logo}>Skate</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="gearwheel-nav"/>
                <Navbar.Collapse id="gearwheel-nav" className="justify-content-end">
                    {checkLogin()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;