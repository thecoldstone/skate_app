import {useRef, useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';
import {Map, MapContext, TabFeed} from '../components/homepage/index';

function HomePage() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    // Brno set as default location
    const [lng, setLng] = useState(16.609807151023205);
    const [lat, setLat] = useState(49.191751445816635);
    const [zoom, setZoom] = useState(13);

    const [key, setKey] = useState("all")
    const [mapData, setMapData] = useState(null)

    useEffect(() => {
        if(!mapData) return;

        if (map.current === null) {
            initMap();
        }
    }, [mapData]);

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
            if (mapData != null) {
                map.current.addSource('spots', {
                    type: 'geojson',
                    data: mapData
                });
                
                // Add custom markers
                for (const marker of mapData.features) {
                    const el = document.createElement('div');
                    el.id = `marker-${marker.properties.id}`;
                    el.className = 'marker';
                    
                    new mapboxgl.Marker(el, {offset: [0, -5]})
                        .setLngLat(marker.geometry.coordinates)
                        .addTo(map.current);
                    
                    // Create listener
                    el.addEventListener('click', (e) => {
                        flyToPlace(marker);
                        createPopUp(marker);
                    });
                }
            }
        });
    }

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
    
    return(
        <MapContext.Provider value={{
            map, 
            mapContainer, 
            currentState: {
                key: key,
                setKey: setKey,
                mapData: mapData,
                setMapData: setMapData
            }
        }}>
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