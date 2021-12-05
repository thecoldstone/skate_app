/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Col, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import { SocialNetworkButton } from '.';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import React from 'react';

/**
 * Form Component
 * 
 * @param {*} props 
 * @returns {React.FC}
 */
function Form(props) {
    // Check which form will be rendered 
    const currentForm = props.type === "Login" ? <LoginForm /> : <SignupForm />;
    const currentTitle = props.type === "Login" ? "Login" : "Signup";

    return (
        <>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <h3>{currentTitle}</h3>
                </Col>
            </Row>
            <Row>
                {currentForm}
            </Row>
            <Row
                className="mt-5 mb-5"
                style={{ height: "2px", backgroundColor: "rgba(0, 0, 0, .1)" }}>
            </Row>
            <Row className="mb-2">
                <SocialNetworkButton icon={<FcGoogle style={{ marginTop: "-5px" }} />} text="Continue with Google" />
            </Row>
            <Row>
                <SocialNetworkButton icon={<BsFacebook style={{ marginTop: "-5px" }} />} text="Continue with Facebook" />
            </Row>
        </>
    );
}

export default Form;