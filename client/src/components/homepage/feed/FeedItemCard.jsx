/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';
import MapContext from '../map/MapContext';
import SpotCard from './items/SpotCard';
import VideoCard from './items/VideoCard';
import EventCard from './items/EventCard';
import PhotoCard from './items/PhotoCard';
import styles from './FeedItemCard.module.css';

/**
 * Feed Item Card Component
 * 
 * @param {Object} props 
 * @returns {React.FC}
 */
function FeedItemCard(props) {
    const { map } = useContext(MapContext);


    /**
     * Creates Pop up for Tab Feed item and flies to it
     * 
     * @param {React.MouseEvent} e 
     */
    const onClickItem = (e) => {
        e.preventDefault();
        flyToPlace(props.feature)
        createPopUp(props.feature)
    };

    /**
     * Flies to place
     * 
     * @param {*} feature geojson object
     * @returns {void}
     */
    const flyToPlace = (feature) => {
        // Assure that map does exist in the App Context
        if (map.current != null) {
            map.current.flyTo({
                center: feature.geometry.coordinates,
                zoom: 15
            });
        };
    };

    /**
     * Creates pop ups
     * 
     * @param {*} feature geojson object
     * @returns {void}
     */
    const createPopUp = (feature) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        const popUp = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
                `<div><h3>${feature.properties.title}</h3><p>${feature.properties.description}</p></div>`
            )
            .addTo(map.current)
    };

    /**
     * Returns card based on the provided type via props
     * 
     * @returns {React.FC}
     */
    const renderItem = () => {
        if (props.type === "spot") {
            return <SpotCard {...props} />
        } else if (props.type === "video") {
            return <VideoCard {...props} />
        } else if (props.type === "event") {
            return <EventCard {...props} />
        } else if (props.type === "photo") {
            return <PhotoCard {...props} />
        }
    }

    return (
        <Row
            id={`feed-item-${props.id}`}
            className={styles.feed_item}
            onClick={(e) => onClickItem(e)}
        >
            {renderItem()}
        </Row>
    );
}

export default FeedItemCard;