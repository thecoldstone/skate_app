import React from 'react';
import { Container } from 'react-bootstrap';

import Comments from './Comments';
import Comment from './Comment';

function Chat({spot, spotId}) {
    return (
        <Container fluid="md">
            <Comments spot={spot}/>
            <Comment spot={spot} spotId={spotId}/>
        </Container>
    )
}

export default Chat;