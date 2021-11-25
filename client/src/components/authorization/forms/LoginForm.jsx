import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';
import formStyles from './Form.module.css';

function LoginForm() {
    return(
        <Form style={{width: "400px"}}>
            <FormGroup controlId="email" className="mb-3 mt-3">
                <Form.Control
                    style={{height: "50px"}}
                    type="email"
                    placeholder="Enter your email or login"/>
            </FormGroup>
            <FormGroup controlId="password" className="mb-3">
                <Form.Control
                    style={{height: "50px"}}
                    type="password"
                    placeholder="Enter your password"/>
            </FormGroup>
            <FormGroup>
                <Col className={formStyles.f_pwd}><p>Forgot password?</p></Col>
            </FormGroup>
            <FormGroup>
                <Button
                    className={formStyles.btn_login}
                    variant="dark">
                    Login
                </Button>
            </FormGroup>
        </Form>
    );
}

export default LoginForm;