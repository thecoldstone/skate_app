import React, { useEffect, useState } from 'react';
import { Row, Col, Nav, Tab, Button} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useApiContext } from '../../components/AppContext';
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

    const addFavouriteSpot = async (event) => {
        console.log("added");
        event.preventDefault();
        try {
            let request = {
                "id" : 0,
                "spot_id" : spotId
            };
            let response = await api.post('/editProfile', JSON.stringify(request));
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setKey(setCurrentTabByHash(location.hash));
    }, [])

    return (       
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col>
                    <Row style={{background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)", height: "60px", position: "fixed", width: "inherit"}}> 
                        <Col>
                            <Row className="mt-2"> 
                                <Nav className="my-auto">
                                    <Nav.Item>
                                        <Nav.Link href="#сhat" eventKey="chat">Chat</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#gallery" eventKey="gallery">Gallery</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="favourite-icon">
                                        <FontAwesomeIcon 
                                        icon={faStar} 
                                        size="1x" cursor='pointer' 
                                        onClick={e => addFavouriteSpot(e)}
                                        
                                        />
                                    </Nav.Item>
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