import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import './Comments.css';

function Comments({spot}) {
    if (spot && spot.comments)
    {
        return (          
            <Col className="vertical-scrollable">
                {spot.comments.map((comment, index) => 
                <Row key={index} className="contributors">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Link to={`/user?id=${comment.userId}`}>{comment.userName}</Link>
                                <Card.Text>
                                    {comment.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>)}
            </Col>
        ) 
    } else {
        return null;
    }
}

export default Comments;
