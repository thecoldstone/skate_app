import React, {useRef, useEffect, useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';
import mapStyles from './Map.module.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(15);
    const [lat, setLat] = useState(50);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom

        });
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));
    });

    return (
        <Row>
            <div ref={mapContainer} className={mapStyles.map_container}/>
        </Row>
    );
}

export default Map;