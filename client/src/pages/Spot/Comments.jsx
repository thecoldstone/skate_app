/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

 import { useEffect, useState} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useWebSocket } from '../../components/AppContext';


import './Chat.css';

function Comments({spotId}) {
    const [comments, setComments] = useState([]);
    const webSocket = useWebSocket();
    
    useEffect(() => {      
        webSocket.emit('send_comments', spotId);
        webSocket.on('get_comments', (data) => {
            setComments(data);
        });
    })

    if (comments)
    {
        return (       
            <>   
                {comments.map((comment, index) => 
                <Row key={index} className="comment">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to={`/profile?id=${comment.userId}`}>{comment.userName}</Link>
                                <Card.Text>
                                    {comment.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>)}
            </>
        ) 
    } else {
        return null;
    }
}

export default Comments;
