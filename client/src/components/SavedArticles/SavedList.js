import React from 'react';
import SavedArticle from './SavedArticle';
import { Col, Panel } from 'react-bootstrap';

const SavedList = props => (
    <Col xs={12}>
        <Panel>
            <h2>Saved Articles</h2>
            {
                props.savedArticles.map(savedArticle => (
                    <SavedArticle
                        key={savedArticle._id}
                        article={savedArticle}
                        toggleSave={props.toggleSave}
                    />
                ))
            }
        </Panel>
    </Col>
);

export default SavedList;
