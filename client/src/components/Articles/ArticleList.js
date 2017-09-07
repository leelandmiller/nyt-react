import React from 'react';
import Article from './Article';
import { Panel, Col } from 'react-bootstrap';

const ArticleList = props => (
    <div>
        {
        props.articles.length > 0 &&
            <Col xs={12}>
                <Panel>
                    <h2>Search Results</h2>
                    { props.articles.map(article => (
                        <Article
                            article={article}
                            key={article._id}
                            saveArticle={props.saveArticle}
                             />
                    )) }
                </Panel>
            </Col>
        }
    </div>
);

export default ArticleList;
