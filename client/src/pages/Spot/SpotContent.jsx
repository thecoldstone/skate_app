/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useEffect, useState } from 'react';
import { Row, Col, Nav, Tab, Button, Modal, Form} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useApiContext, useAuthState } from '../../components/AppContext';
import './Spot.css';
import Chat from './Chat';
import Gallery from './Gallery';

function setCurrentTabByHash(hash) {
    if (hash == '#gallery') {
        return 'gallery';
    }

    return 'chat';
}

function SpotContent({spot, spotId}) {
    const [key, setKey] = useState('all');
    const location = useLocation();
    const api = useApiContext();
    const currentUser = useAuthState();

    function addFavouriteSpot()
    {
        const addFavourite = async (event) => {
            event.preventDefault();
            try {
                let request = {
                    "id" : currentUser.id,
                    "spot_id" : spotId
                };
                await api.post('/editProfile', JSON.stringify(request));
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <Nav.Item className="favourite-icon">
                <FontAwesomeIcon 
                icon={faStar} 
                size="1x" cursor='pointer' 
                onClick={e => addFavourite(e)}
                />
            </Nav.Item>
        );
    }

    function addVideoButton()
    {
        const [modal, setModal] = useState(false);
        const [video, setVideo] = useState("");
        const currentUser = useAuthState();

        const addVideo = async () => {
            try {
                let request = {
                    "user_id" : currentUser.id,
                    "video_url": video,
                    "spot_id" : spotId,
                };
                await api.post('/editSpot', JSON.stringify(request));
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        if (key == 'gallery')
        {
            return (
                <>
                    <Nav.Item className="favourite-icon">
                        <FontAwesomeIcon 
                        icon={faPlus} 
                        size="1x" cursor='pointer' 
                        onClick={e => setModal(true)}
                        />
                    </Nav.Item>

                    <Modal 
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={modal}
                        onHide={() => setModal(false)}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Youtube video</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control 
                                as="textarea" 
                                type="text"
                                placeholder={"Insert Youtube video URL here"} 
                                disabled={false}
                                value={video}
                                onChange={e => setVideo(e.target.value)}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                                variant="primary"
                                onClick={addVideo}
                                disabled={video.length == 0}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
    }

    useEffect(() => {
        setKey(setCurrentTabByHash(location.hash));
    }, [])

    return (       
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col>
                    <Row style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)",
                        height: "60px",
                        position: "fixed",
                        width: "inherit"
                    }}> 
                        <Col>
                            <Row className="mt-2"> 
                                <Nav className="my-auto">
                                    <Nav.Item>
                                        <Nav.Link href="#сhat" eventKey="chat">Chat</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#gallery" eventKey="gallery">Gallery</Nav.Link>
                                    </Nav.Item>
                                    {addFavouriteSpot(spotId)}
                                    {addVideoButton(key, spotId)}
                                </Nav> 
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "80px"}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="chat">
                                <Chat spot={spot} spotId={spotId}/> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="gallery">
                                <Gallery spot={spot}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Col>
            </Row>

        </Tab.Container>
    )
}

export default SpotContent;