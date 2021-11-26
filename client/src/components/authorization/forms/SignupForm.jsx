import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';
import formStyles from './Form.module.css';

function SignupForm() {
    return(
        <Form style={{width: "400px"}}>
            <FormGroup controlId="email" className="mb-3 mt-3">
                <Form.Control
                    style={{height: "50px"}}
                    placeholder="Enter your login"/>
            </FormGroup>
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
                <Button
                    className={formStyles.btn_login}
                    variant="dark">
                    Signup
                </Button>
            </FormGroup>
        </Form>
    );
}

export default SignupForm;