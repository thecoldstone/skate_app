import React, { useState } from 'react';
import { Row, Col, Form, FormLabel, Button } from 'react-bootstrap';

import { useApiContext } from '../../components/AppContext';

import "./Chat.css"

function Comment({spot, spotId}) {

    const [comment, setComment] = useState("");
    const api = useApiContext();

    async function addComment(comment) {
        let response = await api.post(`/comment_add`, JSON.stringify(comment));
        let data = await response.data;
        
        if(!data.hasOwnProperty('error')) {
            return null;
        }
    
        // TODO Handle error state
        return data.error;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            let _comment = await comment;
            await setComment("");
            await addComment({'id': spotId, 'comment': {'userId': 111, 'userName' : 'Jason Statham', 'comment': _comment}});
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
             <Row>
                <Col>
                    <Form.Control 
                        as="textarea" 
                        type="text"
                        placeholder={"Enter your comment"} 
                        disabled={false}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </Col>
                <Col xs="auto" style={{padding: "0%"}}>
                    <Button
                        className="comment-button"
                        variant="primary" 
                        type="submit" 
                        disabled={comment.length == 0}> 
                        Send
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Comment;
