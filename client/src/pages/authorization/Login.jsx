import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import {FormComponent, SocialNetworkButton} from '../../components/authorization/index';

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
                            <Row 
                                className="mt-5 mb-5"
                                style={{height: "2px", backgroundColor: "rgba(0, 0, 0, .1)"}}>     
                            </Row>
                            <Row className="mb-2">
                                <SocialNetworkButton icon={<FcGoogle style={{marginTop: "-5px"}}/>} text="Continue with Google"/>
                            </Row>
                            <Row>
                                <SocialNetworkButton icon={<BsFacebook style={{marginTop: "-5px"}}/>} text="Continue with Facebook"/>
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