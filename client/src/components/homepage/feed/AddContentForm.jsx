import { useContext, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, Dropdown, FormControl } from 'react-bootstrap';
import Geocode from 'react-geocode';
import { BiArrowBack } from 'react-icons/bi';
import mapboxgl from '!mapbox-gl';
import { MapContext } from '..';
import { useApiContext, useAlertContext } from '../../AppContext';
import styles from './FeedItemCard.module.css';

Geocode.setApiKey("AIzaSyAxarv-ogobeURzq2KjYcYjmdYD-5b5Dck");
Geocode.setLanguage("en");
Geocode.setRegion("cz");
Geocode.setLocationType("ROOFTOP");

function AddContentForm() {

    const { map, setCurrentView, currentState } = useContext(MapContext);
    const api = useApiContext();
    const { setAlertContent, setVisible } = useAlertContext();
    const [showOptions, setShowOptions] = useState(true);
    const [itemToCreate, setItemToCreate] = useState("Event");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSelection = (key, e) => {
        e.preventDefault();

        if (key === "spot") {
            setItemToCreate("Spot");
        } else {
            setItemToCreate("Event");
        }
    }

    const handleLocation = (value) => {
        setShowOptions(true);
        setLocation(value);

        Geocode.fromAddress(value).then(
            (res) => {
                setLocations(res.results);
            }
        ).catch((err) => {
            setLocations(null);
        });
    }

    const showLocationOnMap = (e, feature) => {
        e.preventDefault();
        flyToPlace(feature.geometry.location);
        createPopUp(feature);
        setSelectedLocation(feature);
        setLocation(feature.formatted_address);
        setShowOptions(false);
        setLng(feature.geometry.location.lng);
        setLat(feature.geometry.location.lat);
    }

    /**
     * Flies to place
     * 
     * @param {*} feature geojson object
     * @returns {void}
     */
    const flyToPlace = (location) => {
        // Assure that map does exist in the App Context
        if (map.current != null) {
            map.current.flyTo({
                center: location,
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
            .setLngLat(feature.geometry.location)
            .setHTML(
                `<div><h3>${feature.formatted_address}</h3></div>`
            )
            .addTo(map.current)
    };

    const showLocations = () => {
        return (
            <Row className="mt-2 mx-2">
                <Col>
                    <Dropdown.Menu show={showOptions}>
                        {
                            locations.map((item, key) => {
                                return (
                                    <Dropdown.Item
                                        key={key}
                                        eventKey={key}
                                        onClick={(e) => showLocationOnMap(e, item)}>
                                        {item.formatted_address}
                                    </Dropdown.Item>
                                )
                            })

                        }
                    </Dropdown.Menu>
                </Col>
            </Row>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedLocation) {
            // Prepare Alert 
            setAlertContent("Select location!", "error");
            setVisible(true);
            return;
        }

        await api.post(
            "/addItem",
            JSON.stringify(
                {
                    "itemType": itemToCreate.toLowerCase(),
                    "title": title,
                    "description": description,
                    "address": location,
                    "lng": lng,
                    "lat": lat 
                }
            )
        ).then((res) => {
            if (!res.data) {
                // Prepare Alert 
                setAlertContent("Error!", "error");
                setVisible(true);
                return;
            }
            currentState.setKey("all");
            // Prepare Alert 
            setAlertContent("Place has been added!", "success");
            setVisible(true);
            // Change view 
            setCurrentView("TabFeed");
        }).catch((err) => {

            // Prepare Alert 
            setAlertContent("Error!", "error");
            setVisible(true);
        })
    }

    const handleViewChange = (e) => {
        e.preventDefault();
        currentState.setKey("all");
        setCurrentView("TabFeed");
    }

    return (
        <Row style={{ marginTop: "20px" }}>
            <Col>
                <Row className="d-inline-flex justify-content-start">
                    <Button
                        onClick={(e) => handleViewChange(e)}
                        style={{ background: "rgb(0,0,0,0)", border: "none", color: "black" }}>
                        <p><BiArrowBack color="#223a88" size="1rem" />  Back</p>
                    </Button>
                </Row>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId="email" className="mb-3 mt-3">
                            <Dropdown onSelect={handleSelection}>
                                <Dropdown.Toggle variant='secondary'>
                                    Choose type of the item
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant='dark'>
                                    <Dropdown.Item eventKey="event">Event</Dropdown.Item>
                                    <Dropdown.Item eventKey="spot"> Spot</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <FormControl
                                style={{ height: "50px", marginTop: "10px" }}
                                type="text"
                                value={itemToCreate}
                                disabled={true}
                            />
                        </FormGroup>
                        <FormGroup controlId="title" className="mb-3">
                            <Form.Control
                                style={{ height: "50px" }}
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter title"
                            />
                        </FormGroup>
                        <FormGroup controlId="description" className="mb-3">
                            <Form.Control
                                as="textarea"
                                style={{ height: "50px" }}
                                type="text"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Enter description"
                            />
                        </FormGroup>
                        <FormGroup controlId="description" className="mb-3">
                            <Form.Control
                                style={{ height: "50px" }}
                                type="text"
                                placeholder="Enter location"
                                value={location}
                                onChange={e => handleLocation(e.target.value)}
                            />
                            {locations ? showLocations() : null}
                        </FormGroup>
                        <FormGroup>
                            <Button
                                variant="dark"
                                type="submit"
                            >
                                Create
                            </Button>
                        </FormGroup>
                    </Form>
                </Row>
            </Col>
        </Row>
    )
};

export default AddContentForm