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
                            headline={article.headline.main}
                            snippet={article.snippet}
                            url={article.web_url}
                            image={article.multimedia.length > 0 ? article.multimedia[1].url : ''}
                            pubDate={article.pub_date}
                            byline={article.byline}
                            saveArticle={props.saveArticle} />
                    )) }
                </Panel>
            </Col>
        }
    </div>
);

export default ArticleList;
