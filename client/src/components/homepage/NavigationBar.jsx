import {Container, Navbar, Nav} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import navigationStyles from './NavigationBar.module.css';
import axios from 'axios';


function NavigationBar()
{
    const [loginInfo, setLoginInfo] = useState({});
    useEffect(() => {
        const fetchUserData = async () => {
            let response = await axios.get('/authorization_login');
            setLoginInfo(response.data);
        };
        fetchUserData();
    }, []); // open login page -> click login -> need to reload navbar

    function checkLogin() {
        function logout() {
            axios.get('/authorization_logout');
        }
    
        if (loginInfo["user_id"] != -1) {
            let profile_path = "/profile?id=" + loginInfo["user_id"];
            return (
                <Nav>
                    <Nav.Link href={profile_path}>Profile</Nav.Link>
                    <Nav.Link href="/" onClick={logout}>LogOut</Nav.Link>
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

    if (loginInfo){
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
    }
};

export default NavigationBar;