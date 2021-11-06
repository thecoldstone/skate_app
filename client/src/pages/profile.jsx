import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './profile.css'

function Profile () {

    const [userName, setUserName] = useState("James Bond");

    return (
       <Container fluid="md">
            <Row>
                <Col>
                    <h1>{userName}</h1>
                </Col>
            </Row>

           <Row>
            <Col xl={3}>
                <h2>Personal Info</h2>
                <Row xm={6} className="personalInfo">
                    <h1>Profile</h1>
                    {/* <Biography user={user}/> */}
                </Row>
            </Col>
            <Col xl={3}>
                <h2>Groups</h2>
                <Row xm={3} className="groupsInfo">
                    <h1>Profile</h1>
                        {/* <Groups groups={user.groups}/> */}
                </Row>
            </Col>
            <Col xl={6}>
                <h2>Threads</h2>
                <Row xm={3} className="threadsInfo">
                    <h1>Profile</h1>
                    {/* <Threads threads={user.threads}/> */}
                </Row>
            </Col>
           </Row>
        </Container>
    )
}
export default Profile;