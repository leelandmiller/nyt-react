import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

const Article = props => (
    <Row className="ml-20 mr-20">
        <Panel>
            <Col xs={11}>
                <h4>{props.headline}</h4>
                <p>{props.snippet}</p>
            </Col>
            <Col xs={1} className="fav-ic-container">
                <span onClick={() => props.saveArticle(props.article)} className="ion-android-favorite-outline favorite"></span>
            </Col>
        </Panel>
    </Row>
);

export default Article;
