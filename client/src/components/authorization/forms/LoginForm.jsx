/**
 *  Author: Nikita Zhukov <xzhuko00@stud.fit.vutbr.cz>
 *  Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';
import {useState} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { login } from "../AuthorizationHandler"
import { useApiContext, useAuthState, useAuthDispatch } from '../../AppContext';
import formStyles from './Form.module.css';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const api = useApiContext();
    const currentUser = useAuthState();
    const dispatch = useAuthDispatch();

    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            let data = await login(dispatch, {email, password})
            if(!data) return
            navigate('/profile?id=' + data.id);
            window.location.reload();
            console.log(currentUser.errorMessage);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Form style={{width: "400px"}} onSubmit={handleSubmit}>
            <FormGroup controlId="email" className="mb-3 mt-3">
                <Form.Control
                    style={{height: "50px"}}
                    type="email"
                    placeholder="Enter your email or login"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup controlId="password" className="mb-3">
                <Form.Control
                    style={{height: "50px"}}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={currentUser.loading}/>
            </FormGroup>
            <FormGroup>
                <Col className={formStyles.f_pwd}><p>Forgot password?</p></Col>
            </FormGroup>
            <FormGroup>
                <Button
                    className={formStyles.btn_login}
                    variant="dark"
                    type="submit"
                    disabled={!validateForm()}>
                    Login
                </Button>
            </FormGroup>
        </Form>
    );
}

export default LoginForm;