import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import './Chat.css';

function Comments({spot}) {
    if (spot && spot.comments)
    {
        return (       
            <>   
                {spot.comments.map((comment, index) => 
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
