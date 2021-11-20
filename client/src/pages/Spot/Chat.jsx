import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

import Comments from './Comments';
import Comment from './Comment';

function Chat({spot}) {
    return (
        <Container fluid="md">
            <Comments spot={spot}/>
            <Comment spot={spot}/>
            {/* <Comment chat={chat}/> */}
        </Container>
    )
}

export default Chat;