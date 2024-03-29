/**
 * Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
 */

import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useApiContext, useAlertContext } from '../../components/AppContext';
import close_icon_img from "../../pictures/icons/close_button.png";
import './Profile.css'

function EditProfile () {
    const navigate = useNavigate();
    const api = useApiContext();

    let [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("id");

    const { setAlertContent, setVisible } = useAlertContext();

    let [userImage, setUserImage] = useState("");
    useEffect(() => {
        const fetchUserData = async () => {
            let response = await api.post('/profile', JSON.stringify({'id': userId})); // get user image
            setUserImage(response.data.image);
        };
        fetchUserData();
    }, []);

    const [newEmail, setEmail] = useState("");
    const [newPass, setPass] = useState("");
    const [newRepPass, setRepPass] = useState("");
    const [newName, setName] = useState("");
    const [newFace, setFace] = useState("");
    const [newInst, setInst] = useState("");
    const [newTikTok, setTikTok] = useState("");

    async function saveChanges() { // create dictionary and send to backend
        let request = {
            "id" : userId,
            "email" : newEmail,
            "pass" : newPass,
            "rep_pass" : newRepPass,
            "name" : newName,
            "facebook" : newFace,
            "instagram" : newInst,
            "tiktok" : newTikTok
        }
        let response = await api.post('/editProfile', JSON.stringify(request));

        if (response && response.data.result == "OK") {
            setAlertContent("Personal info has been saved!", "success");
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                navigate("/profile?id=" + userId);
            }, 1000);
        } else {
            setAlertContent("Nothing to save!", "error");
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 3000);
        }
    }

    return (
        <Container className="body-profile" fluid="md">
            <Row className="title">
                <Col md={10}>
                    Edit profile
                </Col>
                <Col md={2}>
                    <a href={"/profile?id=" + userId}>
                        <Image className="video_img" src={close_icon_img}/> {/*close button*/}
                    </a>
                </Col>
            </Row>

            <Row>
                <Col className="profile_image">
                    <Image src={userImage} roundedCircle />
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
                        <Form.Label>New email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>New password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPass(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="edit_prof_row">
                <Col>
                    <Form.Label>New name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Repeat new password:</Form.Label>
                        <Form.Control type="password" placeholder="Repeate password" onChange={e => setRepPass(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="edit_prof_row">
                <Col>
                    <Form.Label>New facebook:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your facebook" onChange={e => setFace(e.target.value)}/>
                </Col>

                <Col>
                    <Form.Label>New instagram:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your instagram" onChange={e => setInst(e.target.value)}/>
                </Col>

                <Col>
                    <Form.Label>New tiktok:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your tiktok" onChange={e => setTikTok(e.target.value)}/>
                </Col>
            </Row>

            <Row className="save_button_cont">
                <Button className="save_button" variant="light" type="button" onClick={saveChanges}>
                    Save changes
                </Button>
            </Row>
        </Container>
    )
}
export default EditProfile;