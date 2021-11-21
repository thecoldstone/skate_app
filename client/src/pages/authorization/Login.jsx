import {Container, Row, Col, Image} from 'react-bootstrap';
import FormComponent from './Form';

function Login() {
    return(
        <Container fluid style={{backgroundColor: "#F2F2F2"}}>
            <Row>
                <Col md={6}>
                    <Row className="justify-content-md-center" style={{margin: "20% 0"}}>
                        <Col md="auto">
                            <Row>
                                <Col><h2>Login</h2></Col>
                            </Row>
                            <Row>
                                <FormComponent/> 
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Image src="assets/skatepark_img_login.png" style={{objectFit: "cover", height: "calc(100vh - 56px)", padding: "0"}}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;