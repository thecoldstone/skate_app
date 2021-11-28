import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import { useSearchParams, useLocation } from "react-router-dom";
import { useApiContext } from '../../components/AppContext';
import Image from 'react-bootstrap/Image'

import place_1_image from '../../pictures/spots/spot2.jpg';
import './Spot.css';

import Chat from './Chat';
import Gallery from './Gallery';

function setCurrentTabByHash(hash) {
    if (hash == '#gallery') {
        return 'gallery';
    }

    return 'chat';
}

function Spot() {

    const [spot, setSpot] = useState({});
    const [key, setKey] = useState('all');
    
    const location = useLocation();
    const api = useApiContext();

    let [searchParams, setSearchParams] = useSearchParams();
    let spotId = searchParams.get("id");

    useEffect(() => {
        const fetchSpotData = async () => {
            try {
                let response = await api.post('/spot', JSON.stringify({'id': spotId}));
                setSpot(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
        setKey(setCurrentTabByHash(location.hash));
    }, [])

    return (       
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                        <Row className="mt-sm-2" style={{position: "fixed"}}> 
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link href="#сhat" eventKey="chat">Chat</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#gallery" eventKey="gallery">Gallery</Nav.Link>
                                </Nav.Item>
                            </Nav> 
                        </Row>
                        <Row style={{marginTop: "80px"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="chat">
                                    <Chat className="chat" spot={spot} spotId={spotId}/> 
                                </Tab.Pane>
                                <Tab.Pane eventKey="gallery">
                                    <Gallery/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </Col>
                <Col md={6}>
                    <Row>
                        <Image style={{objectFit: "cover", height: "calc(100vh - 60px)", padding: "0"}} src={place_1_image}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Spot;
