/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useEffect, useState } from 'react';
import { Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import "./Spot.css"
import { useWebSocket } from '../../components/AppContext';


/**
 * A function that defines SpotImage as a component
 * 
 * @param {*} spotId ID of the current spot to render
 * @param {*} spot The current spot to render
 * @returns {React.FC} SpotImage component for rendering
 */
function SpotImage({spot, spotId}) {
    let [spotMisc, setSpotMisc] = useState({})
    let webSocket = useWebSocket();

    // get misc data from sockets in order to not reload a window
    useEffect(() => {
        webSocket.emit('send_spot_misc', spotId);
        webSocket.on('get_spot_misc', (data) => {
            setSpotMisc(data);
        });
    })

    if (spot.image)
    {
        return (
            <Row className="image-container" style={{ 
                backgroundImage: `url(${spot.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 5
            }}>
                <div
                className="text-white text-center d-flex align-items-center py-5 justify-content-center"
                style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
                    <div>
                        <h3 className="pink-text">
                            {spot.name}
                        </h3>
                        <p>
                            {spot.description}
                        </p>
                        <p><FontAwesomeIcon icon={faVideo}/> {spotMisc.videos_count} 
                            <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faUserFriends}/> {spotMisc.people_count}</p>
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

export default SpotImage;