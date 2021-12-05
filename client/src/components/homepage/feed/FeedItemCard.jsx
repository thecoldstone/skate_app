/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { useContext } from 'react';
import {Row} from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';
import MapContext from '../map/MapContext';
import SpotCard from './items/SpotCard';
import VideoCard from './items/VideoCard';
import EventCard from './items/EventCard';
import PhotoCard from './items/PhotoCard';
import styles from './FeedItemCard.module.css';

function FeedItemCard(props) {
    const {map, currentState} = useContext(MapContext);
    

    const onClickItem = (e) => {
        e.preventDefault();
        flyToPlace(props.feature)
        createPopUp(props.feature)
    };

    const flyToPlace = (feature) => {
        // Assure that map does exist in the App Context
        if (map.current != null) {
            map.current.flyTo({
                center: feature.geometry.coordinates,
                zoom: 15
            });
        };
    };

    const createPopUp = (feature) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        const popUp = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
                `<div><h3>${feature.properties.title}</h3><p>${feature.properties.description}</p></div>`
            )
            .addTo(map.current)
    };

    const renderItem = () => {
        if (props.type === "spot") {
            return <SpotCard {...props}/>
        } else if(props.type === "video") {
            return <VideoCard {...props}/>
        } else if(props.type === "event") {
            return <EventCard {...props}/>
        } else if(props.type === "photo") {
            return <PhotoCard {...props}/>
        }
    }

    return(
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