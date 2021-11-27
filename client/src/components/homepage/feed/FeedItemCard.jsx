import { useContext } from 'react';
import {Row, Col, Nav, Tab, Image} from 'react-bootstrap';
import MapContext from '../map/MapContext';
import places from '../map/places';

function FeedItemCard(props) {
    const {map} = useContext(MapContext);

    const onClickItem = (e) => {
        e.preventDefault();

        for(const feature of places.features) {
            if (e.currentTarget.id === feature.properties.id) {
                flyToPlace(feature);
            }
        }
    };

    const flyToPlace = (feature) => {
        // Assuer that map does exist in the App Context
        if (map.current != null) {
            map.current.flyTo({
                center: feature.geometry.coordinates,
                zoom: 15
            });
        };
    };

    return(
        <Row 
            id={props.id} onClick={(e) => onClickItem(e)}
            style={{
                borderRadius: "10px",
                boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, .1)",
                cursor: "pointer",
                marginBottom: "20px",
            }}
        >
            <Col sm={7} sm>
                <Row className="mx-md-1 my-md-3">
                    <Col>
                        <Row><h4>{props.title}</h4></Row>
                        <Row className="mt-2"><p>{props.description}</p></Row>
                        <Row className="mt-2"><p>Location: {props.location}</p></Row>
                    </Col>

                </Row>
            </Col>
            <Col sm={5} style={{padding: "0"}}>
                <Image fluid src={`assets/${props.img}`} style={{
                borderRadius: "0 10px 10px 0",
                height: "100%"
            }}/>
            </Col>
        </Row>
    );
}

export default FeedItemCard; 