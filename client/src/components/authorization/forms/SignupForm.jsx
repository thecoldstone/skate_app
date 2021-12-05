/**
 *  Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Form, FormGroup, Button } from 'react-bootstrap';
import formStyles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

/**
 * SignUp Form Component
 * 
 * @returns {React.FC}
 */
function SignupForm() {
    const navigate = useNavigate();

    /**
     * Function navigator 
     */
    function openLoginPage() {
        navigate("/login");
    }

    return (
        <Form style={{ width: "400px" }}>
            <FormGroup controlId="email" className="mb-3 mt-3">
                <Form.Control
                    style={{ height: "50px" }}
                    placeholder="Enter your login" />
            </FormGroup>
            <FormGroup controlId="email" className="mb-3 mt-3">
                <Form.Control
                    style={{ height: "50px" }}
                    type="email"
                    placeholder="Enter your email or login" />
            </FormGroup>
            <FormGroup controlId="password" className="mb-3">
                <Form.Control
                    style={{ height: "50px" }}
                    type="password"
                    placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
                <Button
                    className={formStyles.btn_login}
                    variant="dark"
                    onClick={openLoginPage}>
                    Signup
                </Button>
            </FormGroup>
        </Form>
    );
}

export default SignupForm;