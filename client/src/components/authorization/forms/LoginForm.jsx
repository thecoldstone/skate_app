import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';
import {useState} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useApiContext } from '../../AppContext';
import formStyles from './Form.module.css';

function LoginForm() {
    const navigate = useNavigate();
    const api = useApiContext();

    async function login() {
       let response = await api.post('/authorization_login', JSON.stringify({'user_id': 0}));
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