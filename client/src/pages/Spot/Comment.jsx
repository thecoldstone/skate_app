import React, { useState } from 'react';
import { Row, Col, Form, FormLabel, Button } from 'react-bootstrap';

import axios from 'axios';
import './Comment.css';

function Comment({spot}) {

    const [comment, setComment] = useState("");

    async function addComment(comment) {
            let response = await axios.post(`/comment_add`, JSON.stringify(comment));
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
            await addComment({'id': spot.id, 'comment': {'userId': 111, 'userName' : 'Jason Statham', 'comment': _comment}});
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Col className="comment">
            <Form onSubmit={handleSubmit}>
                <FormLabel className="comment-header">Comment</FormLabel>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder={"Enter your comment"} 
                    disabled={false}
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    />
                <Button
                    className="comment-button"
                    variant="primary" 
                    type="submit" 
                    disabled={comment.length == 0}> 
                    Send
                </Button>
            </Form>
        </Col>
    )
}

export default Comment;
