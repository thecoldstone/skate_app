import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import close_icon_img from "../pictures/icons/close_button.png";

import profile_image from '../pictures/profile/profile_main.png';

import './Profile.css'
import axios from 'axios';

function Edit_profile () {

    async function save_changes() {
       let response = await axios.post('/editProfile', JSON.stringify({'kurlyk':'alibaba'}));
    }

    return (
        <Container fluid="md">
            <Row className="title">
                <Col md={10}>
                    Edit profile
                </Col>
                <Col md={2}>
                    <a href="/profile">
                        <Image className="video_img" src={close_icon_img}/>
                    </a>
                </Col>
            </Row>

            <Row>
                <Col className="profile_image">
                    <Image src={profile_image} roundedCircle />
                </Col>
            </Row>

            <Row>
                <Col className="text text-center">
                    Select new image:
                </Col>
            </Row>

            <Row>
                <Col className="col-lg-2 col-lg-offset-2 col-centered">
                    <Form.Control type="file" className="select_new_image_button"/>
                </Col>
            </Row>

            <Row className="edit_prof_row">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="edit_prof_row">
                <Col>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Repeat new password:</Form.Label>
                        <Form.Control type="password" placeholder="Repeate password" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="edit_prof_row">
                <Col>
                    <Form.Label>Facebook:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your facebook" />
                </Col>

                <Col>
                    <Form.Label>Instagram:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your instagram" />
                </Col>

                <Col>
                    <Form.Label>tiktok:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your tiktok" />
                </Col>
            </Row>

            <Row className="save_button_cont">
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className="save_button" variant="light" type="button" onClick={save_changes}>
                    Save changes
                </Button>
            </Row>
        </Container>
    )
}
export default Edit_profile;