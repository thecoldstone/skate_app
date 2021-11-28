import React from 'react';
import { Container } from 'react-bootstrap';

import Comments from './Comments';
import Comment from './Comment';

function Gallery({spot, spotId}) {
    return (
        <Container fluid="md">
            <iframe
                height="20%" 
                width="60%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </Container>
    )
}

export default Gallery;