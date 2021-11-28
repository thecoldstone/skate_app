import {useRef, useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';
import places from '../components/homepage/map/places';
import {Map, MapContext, TabFeed} from '../components/homepage/index';


function HomePage() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-77.034084);
    const [lat, setLat] = useState(38.909671);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        initMap();
    });

    const initMap = () => {
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
            trackUserLohation: true,
            showUserHeading: true
        }));
    
        map.current.on('load', () => {
            map.current.addLayer({
                id: 'locations',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: places
                }
            });
        });
    }

    return(
        <MapContext.Provider value={{map, mapContainer}}>
            <Container>
                <Row>
                    <Col md={{order: 1}} style={{zIndex: "1"}}>
                        <Row>
                            <Map/>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <TabFeed/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </MapContext.Provider>
    );
};

export default HomePage;