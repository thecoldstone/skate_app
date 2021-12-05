/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import { Container, Col, Row } from 'react-bootstrap';

import "./Chat.css";
import Comment from './Comment';
import Comments from './Comments';

function Chat({spotId}) {   

    return (
        <Container className="chat-container">
            <Row>
                <Col>
                    <Row className="vertical-scrollable" style={{bottom: "3rem"}}>
                        <Comments spotId={spotId}/>
                    </Row>
                    <Row className="comment" style={{position: "fixed", bottom: 0}}>
                        <Comment spotId={spotId}/>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )   
}

export default Chat;