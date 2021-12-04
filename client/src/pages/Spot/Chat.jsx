import { useEffect, useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useWebSocket } from '../../components/AppContext';

import "./Chat.css";
import Comment from './Comment';
import Comments from './Comments';

function Chat({spot, spotId}) {
    const [comments, setComments] = useState([]);
    const webSocket = useWebSocket();
    
    useEffect(() => {      
        webSocket.emit('get_comments', spotId);
        webSocket.on('message', (data) => {
            setComments(data);
        });
    })

    return (
        <Container className="chat-container">
            <Col className="vertical-scrollable">
                <Row>
                    <Comments comments={comments}/>
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