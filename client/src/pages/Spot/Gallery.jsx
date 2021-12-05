/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React from 'react';
import { Container, Col } from 'react-bootstrap';

import "./Spot.css";

function Gallery({spot}) {

    if (spot && spot.videos) 
    {
        return (
            <Container className="gallery-container">
                {spot.videos.map((video, index) =>
                    <Col key={index}>
                        <iframe
                            className="video-container"
                            src={video.url}>
                        </iframe>
                    </Col>
                )}
            </Container>
        )
    }
    else
    {
        return null;
    }
    
}

export default Gallery;