import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Chat.css";
import Comment from './Comment';
import Comments from './Comments';

function Chat({spot, spotId}) {

    return (
        <Container className="chat-container">
            <Col className="vertical-scrollable">
                <Row>
                    <Comments spot={spot}/>
                </Row>
            </Col>
            <Col >
                <Row className="comment">
                    <Comment spot={spot} spotId={spotId}/>
                </Row>
                
            </Col>
        </Container>
    )   
}

export default Chat;