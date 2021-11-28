import { useContext } from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import {BsFillPeopleFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im';
import mapboxgl from '!mapbox-gl';
import fontStyles from './FeedItemCard.module.css';
import MapContext from '../map/MapContext';
import places from '../map/places';

function FeedItemCard(props) {
    const {map} = useContext(MapContext);

    const onClickItem = (e) => {
        e.preventDefault();

        for(const feature of places.features) {
            if (e.currentTarget.id === feature.properties.id) {
                flyToPlace(feature);
                createPopUp(feature);
            }
        }
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

    return(
        <Row 
            id={props.id} onClick={(e) => onClickItem(e)}
            style={{
                borderRadius: "10px",
                boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, .1)",
                cursor: "pointer",
                marginBottom: "30px",
            }}
        >
            <Col sm={9}>
                <Row className="mx-md-1 my-3">
                    <Col>
                        <Row><h4 className={fontStyles.forma_djr_medium}>{props.title}</h4></Row>
                        <Row className="mt-2"><p>BlaBlaBla...</p></Row>
                        <Row className="mt-2">
                            <Col>
                                <Row>
                                    <Col style={{display: "flex", gap: "10px", alignItems: "center"}}>
                                        <BsFillPeopleFill size="1.5em"/>
                                        <p style={{marginTop: "1rem"}}>35 people</p>
                                        <ImLocation2 size="1.5em"/>
                                        <p style={{marginTop: "1rem"}}>Brno-Židenice, Juliánov</p>
                                        <Button style={{backgroundColor: "#223A88", borderRadius: "11px"}}>Explore</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
            <Col sm={3} style={{padding: "0"}}>
                {/* <Row> */}
                    <Image fluid src={`assets/${props.img}`} style={{
                        objectFit: "cover",
                        borderRadius: "0 10px 10px 0",
                        height: "100%"
                    }}/>
                {/* </Row> */}
            </Col>
        </Row>
    );
}

export default FeedItemCard; 