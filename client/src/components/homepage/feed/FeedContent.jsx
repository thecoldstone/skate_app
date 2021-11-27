import {Row, Col, Tab} from 'react-bootstrap';
import places from '../map/places';
import FeedItemCard from './FeedItemCard';

function renderFeedItems() {
    const items = ["all", "events", "places", "videos", "photos"];

    return(
        <Tab.Content>
            {items.map((item, index) => {
                return (<Tab.Pane eventKey={item} key={index}>{renderFeedContentByPlace()}</Tab.Pane>)
            })}
        </Tab.Content>
    ) 
};

function renderFeedContentByPlace() {
    return (
        <Col>
            {places.features.map((place, key) => {
                return(
                    <FeedItemCard 
                        id={place.properties.id}
                        key={key} 
                        title={place.properties.title}
                        description={place.properties.description}
                        />
                )
            })}
        </Col>
    );
};

function renderFeedContent() {
    const items = [
        {title: 'Workshop', img: 'skatepark_img_1.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'Skate Fest', img: 'skatepark_img_2.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'New skatepark', img: 'skatepark_img_1.png'},
        {title: 'Workshop', img: 'skatepark_img_1.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'Skate Fest', img: 'skatepark_img_2.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'New skatepark', img: 'skatepark_img_1.png'}];
    const output = [];

    items.forEach((item, index) => {
        output.push(
            <FeedItemCard 
                title={item.title} 
                img={item.img}
                location={item.location} 
                key={index}
            />
        )
    });

    return (
        <Col>
            {output}
        </Col>
    )
};

function FeedContent() {
    return(
        <Row className="mx-2" style={{marginTop: "80px"}}>
            {renderFeedItems()}
        </Row>
    );
};

export default FeedContent;