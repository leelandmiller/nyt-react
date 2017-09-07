import React, { Component } from 'react';
import SavedList from './SavedArticles/SavedList';
import API from '../utils/API';

import { Grid, Row } from 'react-bootstrap';

class SavedMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            savedArticles: []
        }

        this.toggleSave = this.toggleSave.bind(this);
        this.renderSavedArticles = this.renderSavedArticles.bind(this);
    }

    componentDidMount() {
        this.renderSavedArticles();
    }

    renderSavedArticles() {
        API.getSavedArticles().then(res => {
            this.setState({
                savedArticles: res.data
            });
        }).catch(err => console.log(err));
    }

    toggleSave(articleId) {
        API.removeSavedArticle(articleId).then(res => {
            this.renderSavedArticles();
        })
    }

    render() {
        return (
            <Grid className="mt-20">
                <Row>
                    <SavedList
                        savedArticles={this.state.savedArticles}
                        toggleSave={this.toggleSave}
                    />
                </Row>
            </Grid>
        );
    }
}

export default SavedMain;
