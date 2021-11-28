import {Row, Col, Tab} from 'react-bootstrap';
import places from '../map/places';
import FeedItemCard from './FeedItemCard';

function FeedContent() {

    const items = ["all", "events", "places", "videos", "photos"];

    const renderFeedItems = () => {
        return(
            <Tab.Content>
                {items.map((item, index) => {
                    return (<Tab.Pane eventKey={item} key={index}>{renderFeedContentByPlace()}</Tab.Pane>)
                })}
            </Tab.Content>
        )
    }

    const renderFeedContentByPlace = () => {
        return (
            <Col>
                {places.features.map((place, key) => {
                    return(
                        <FeedItemCard 
                            id={place.properties.id}
                            key={key} 
                            title={place.properties.title}
                            description={place.properties.description}
                            img="skatepark_img_2.png"
                            />
                    )
                })}
            </Col>
        );
    }

    return(
        <Row style={{marginTop: "80px"}}>
            {renderFeedItems()}
        </Row>
    );
};

export default FeedContent;