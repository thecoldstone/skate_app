/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { useApiContext, useAuthState } from '../../components/AppContext';

import "./Chat.css"


/**
 * A function that defines Comment as a component
 * 
 * @param {*} spotId ID of the current spot to render
 * @returns {React.FC} Comment component for rendering
 */
function Comment({spotId}) {

    const [comment, setComment] = useState("");
    const currentUser = useAuthState();
    const api = useApiContext();

    /**
     * A function that send POST request to the backend to save data
     * 
     * @param {*} comment ID of the current spot to render
     */
    async function addComment(comment) {
        let response = await api.post(`/commentAdd`, JSON.stringify(comment));
        let data = await response.data;
        
        if(!data.hasOwnProperty('error')) {
            return null;
        }

        // TODO Handle error state
        return data.error;
    }

    /**
     * A function that handles submit of a comment
     * 
     * @param {*} event 
     */
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            let _comment = await comment;
            await setComment("");
            await addComment({'id': spotId, 'comment': {'userId': currentUser.id, 'comment': _comment}});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
             <Row>
                <Col style={{paddingRight: "0%", width: "74vh", height: "2rem"}}>
                    <Form.Control 
                        as="textarea" 
                        type="text"
                        placeholder={
                            currentUser.id == undefined ?
                            "Log in to comment" : "Enter your comment"
                        } 
                        disabled={currentUser.id == undefined}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </Col>
                <Col md="auto" style={{paddingLeft: "0%" , height: "2rem"}}>
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
