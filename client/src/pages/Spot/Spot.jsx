import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useApiContext } from '../../components/AppContext';

import "./Spot.css"
import SpotContent from './SpotContent';

function setCurrentTabByHash(hash) {
    if (hash == '#gallery') {
        return 'gallery';
    }

    return 'chat';
}

function Spot() {
    const [spot, setSpot] = useState({});
    const api = useApiContext();

    let [searchParams, setSearchParams] = useSearchParams();
    let spotId = searchParams.get("id");

    useEffect(() => {
        const fetchSpotData = async () => {
            try {
                let response = await api.post('/spot', JSON.stringify({'id': spotId}));
                setSpot(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
    }, [])

    const renderSpotImage = () => {
        if (spot.image)
        {
            return (
                <Row className="image-container" style={{ 
                    backgroundImage: `url(${spot.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="text-white text-center d-flex align-items-center py-5" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
                        <div>
                            <h3 className="pink-text">
                                {spot.name}
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                            sit officia accusamus minus error nisi architecto nulla ipsum
                            dignissimos. Odit sed qui, dolorum!
                            </p>
                            <p><FontAwesomeIcon icon={faVideo}/> {spot.videos.length}</p>
                        </div>
                    </div>
                </Row>
            )
        }
        else
        {
            return null;
        }
    }

    return (       
        <Container className="container">
            <Row>
                <Col sm={6}>
                    <Row>
                        <SpotContent spot={spot} spotId={spotId}/>
                    </Row>
                </Col>
                <Col>
                    {renderSpotImage()}
                </Col>
            </Row>
        </Container>
    )
}

export default Spot;

