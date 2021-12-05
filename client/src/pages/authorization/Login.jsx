/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Form} from '../../components/authorization/index';

function Login() {
    return(
        <Container fluid style={{backgroundColor: "#F2F2F2"}}>
            <Row>
                <Col md={6}>
                    <Row className="justify-content-md-center" style={{margin: "10% 0"}}>
                        <Col md="auto">
                            <Form type="Login"/>
                            <Row className="mt-5">
                                <Col style={{textAlign: "center"}}>
                                    <Row>
                                        <p>Don't have an account</p>
                                    </Row>
                                    <Row>
                                        <Link to="/signup" style={{color: "blue"}}>Signup</Link>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Image src="assets/skatepark_img_login.png" style={{objectFit: "cover", height: "calc(100vh - 60px)", padding: "0"}}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;