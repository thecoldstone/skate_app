import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';
import formStyles from './Form.module.css';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    async function login() {
       let response = await axios.post('/authorization_login', JSON.stringify({'user_id': 0}));
       let profile_path = "/profile?id=" + response.data["user_id"];
       navigate(profile_path);
    }

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
                    variant="dark"
                    onClick={login}>
                    Login
                </Button>
            </FormGroup>
        </Form>
    );
}

export default LoginForm;