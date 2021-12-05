/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Chat.css';

function Comments({comments}) {
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
