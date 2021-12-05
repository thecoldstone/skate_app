/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Row, Col, Image, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {MdSkateboarding} from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im';
import fontStyles from '../FeedItemCard.module.css';

function SpotCard(props) {

    let navigate = useNavigate()

    const handleExploeButton = (e) => {
        e.preventDefault();

        navigate(`/spot?id=${props.id}`);
    }

    return (
        <>
            <Col sm={9}>
                <Row className="mt-3"><h4 className={fontStyles.forma_djr_medium}><MdSkateboarding/> {props.title}</h4></Row>
                <Row className="mx-md-1">
                    <Col>
                        <Row className="mt-2">{props.description}</Row>
                        <Row className="mt-2">
                            <Col>
                                <Row>
                                    <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <BsFillPeopleFill size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>{props.feature.properties.members} members</p>
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
                <Image fluid src={props.feature.properties.image} style={{
                    objectFit: "cover",
                    borderRadius: "0 10px 10px 0",
                    height: "100%"
                }} />
                {/* </Row> */}
            </Col>
        </>
    )
}

export default SpotCard;