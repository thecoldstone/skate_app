/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Nav, Tab, Button, Modal, Form} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useAlertContext, useApiContext, useAuthState,
         useAuthDispatch, useWebSocket } from '../../components/AppContext';
import './Spot.css';
import Chat from './Chat';
import Gallery from './Gallery';
import SpotContext from './SpotContext';


/**
 * A function that handles what type of the content to render 
 * 
 * @param {*} hash hash in the search bar
 * @returns {string} type of content to render
 */
function setCurrentTabByHash(hash) {
    if (hash == '#gallery') {
        return 'gallery';
    }

    return 'chat';
}

/**
 * A function that defines SpotContent as a component
 * 
 * @param {*} spotId ID of the current spot to render
 * @param {*} spot The current spot to render
 * @returns {React.FC} SpotContent component for rendering
 */
function SpotContent({spot, spotId}) {
    const [key, setKey] = useState('all');
    const [isFavourite, setFavourite] = useState(false);

    const location = useLocation();
    const api = useApiContext();
    const currentUser = useAuthState();
    const dispatch = useAuthDispatch();
    const webSocket = useWebSocket();
    const {needReload, setNeedReload} = useContext(SpotContext);
    const { setAlertContent, setVisible } = useAlertContext();

    // set Tab content at the start of the rendering
    useEffect(() =>{
        setKey(setCurrentTabByHash(location.hash));
    }, [])

    // get data if the spot is favourite for the current user
    // from sockets in order to not reload a window
    useEffect(() => {
        webSocket.emit('send_is_favourite', {
            "user_id" : currentUser.id,
            "spot_id" : spotId
        });
        webSocket.on('get_is_favourite', (data) => {
            setFavourite(data);
        });
    }, [needReload])

    /**
     * A function that defines favourite icon as a navigation item
     * 
     * @returns {React.FC} NavItem for favourite icon
     */
    function addFavouriteSpot()
    {
        /**
         * A function that handles adding or removing
         * the spot from favourite by POST request
         */
        const addFavourite = async (event) => {
            event.preventDefault();
            try {
                let request = {
                    "id" : currentUser.id,
                    "spot_id" : spotId
                };
                await api.post('/editProfile', JSON.stringify(request));
                
                setNeedReload(!needReload);
                let message = (!isFavourite) ? "The spot has been added to favourite!"
                                             : "The spot has been removed from favourite!";

                setAlertContent(message, 'success');
                setVisible(true);
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <Nav.Item className="favourite-icon" style={{marginLeft: "50vh"}}>
                <FontAwesomeIcon
                style={(isFavourite) ? {color: 'yellow'} : {color: 'gray'}}
                icon={faStar} 
                size="1x" cursor='pointer' 
                onClick={e => addFavourite(e)}
                />
            </Nav.Item>
        );
    }

    /**
     * A function that defines video adding icon as a navigation item
     * 
     * @returns {React.FC} NavItem for video adding icon
     */
    function addVideoButton()
    {
        const [modal, setModal] = useState(false);
        const [video, setVideo] = useState("");

        /**
         * A function that handles adding a video to the spot by POST request
         */
        const addVideo = async (event) => {
            event.preventDefault();

            try {
                let request = {
                    "user_id" : currentUser.id,
                    "video_url": video,
                    "spot_id" : spotId,
                };
                let response = await api.post('/editSpot', JSON.stringify(request));
                if (response.data.error)
                    // sets the error to be shown in modal window
                    dispatch({ type: 'VIDEO_LOADING_ERROR', error: response.data.error });
                else{
                    setNeedReload(!needReload);
                    setModal(false);

                    setAlertContent("Video has been successfully added!", 'success');
                    setVisible(true);
                    setTimeout(() => {
                        setVisible(false)
                    }, 3000); 
                }
            } catch (error) {
                console.log(error);
            }
        }

        if (key == 'gallery')
        {
            return (
                <>
                    <Nav.Item className="favourite-icon" style={{marginLeft: "2vh"}}>
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
                            {currentUser.errorMessage ? <p className="error">{currentUser.errorMessage}</p> : null}
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

    return (       
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col>
                    <Row style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)",
                        height: "60px",
                        position: "fixed",
                        width: "inherit",
                        zIndex: 3,
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
                    <Row style={{marginTop: "80px", zIndex: 0}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="chat">
                                <Chat spotId={spotId}/> 
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