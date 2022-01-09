/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useApiContext, useAuthState } from '../../components/AppContext';

import "./Spot.css"
import SpotContent from './SpotContent';
import SpotImage from './SpotImage';
import SpotContext from './SpotContext';

/**
 * A function that defines Spot as a component
 * 
 * @returns {React.FC} Spot component for rendering
 */
function Spot() {
    const [spot, setSpot] = useState({});
    const api = useApiContext();
    const currentUser = useAuthState();
    const [needReload, setNeedReload] = useState(true);

    let [searchParams, setSearchParams] = useSearchParams();
    let spotId = searchParams.get("id");

    // gets the data about spot at the start of rendering
    useEffect(() => {
        const fetchSpotData = async () => {
            try {
                let response = await api.post('/spot', JSON.stringify({
                    'id': spotId, 'user_id': currentUser.id
                }));
                setSpot(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
    }, [needReload])

    return (
        <SpotContext.Provider value={{needReload, setNeedReload}}>
            <Container className="container">
                <Row>
                    <Col sm={6}>
                        <Row>
                            <SpotContent spot={spot} spotId={spotId}/>
                        </Row>
                    </Col>
                    <Col>
                        <SpotImage spot={spot} spotId={spotId}/>
                    </Col>
                </Row>
            </Container>
        </SpotContext.Provider>
    )
}

export default Spot;

