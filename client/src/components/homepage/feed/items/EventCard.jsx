import { Row, Col, Image, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im';
import fontStyles from '../FeedItemCard.module.css';

function EventCard(props) {

    let navigate = useNavigate()

    const handleExploeButton = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Col sm={9}>
                <Row className="mx-md-1 my-3">
                    <Col>
                        <Row><h4 className={fontStyles.forma_djr_medium}>{props.title}</h4></Row>
                        <Row className="mt-2">{props.description}</Row>
                        <Row className="mt-2">
                            <Col>
                                <Row>
                                    <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <BsFillPeopleFill size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>35 people</p>
                                        <ImLocation2 size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>{props.feature.properties.address}</p>
                                        <Button 
                                            style={{ backgroundColor: "#223A88", borderRadius: "11px" }}
                                            onClick={handleExploeButton}
                                            >Explore</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
                {/* <Row> */}
                <Image fluid src={`assets/${props.img}`} style={{
                    objectFit: "cover",
                    borderRadius: "0 10px 10px 0",
                    height: "100%"
                }} />
                {/* </Row> */}
            </Col>
        </>
    )
}

export default EventCard;