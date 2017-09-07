import React from 'react';
import { Row, Panel, Col } from 'react-bootstrap';

const SavedArticle = props => (
    <Row className="ml-20 mr-20">
        <Panel>
            <Col xs={10} sm={11}>
                <h4>{props.article.headline}</h4>
                <p>{props.article.snippet}</p>
                <a href={props.article.url} target="_blank">View Article</a>
            </Col>
            <Col xs={2} sm={1} className="fav-ic-container">
                <span onClick={() => props.toggleSave(props.article._id)} className="ion-android-favorite favorite"></span>
            </Col>
        </Panel>
    </Row>
);

export default SavedArticle;
