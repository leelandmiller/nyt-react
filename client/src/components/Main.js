import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Grid, Row } from 'react-bootstrap';
import ArticleList from './Articles/ArticleList';
import API from '../utils/API';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            searchTerm: '',
            startYear: '',
            endYear: '',
            validator: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        if (name === 'startYear' || name === 'endYear') {
            value = value.replace(/[^0-9]/g, '');
            value = value.substring(0, 4);
        }

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.searchTerm === '') {
            // alert('An empty search gets you nothin');
            this.getValidationState();
        } else {
            API.NYTsearch(this.state).then(res => {
                let articleResults = res.data.response.docs;
                this.setState({
                    articles: articleResults
                });
            });
        }
    }

    getValidationState() {
        let length = this.state.searchTerm.length;
        if (length === 0) {
            this.setState({
                'validator': 'error'
            });
        }
    }

    saveArticle(article) {
        API.saveArticle(article).then(res => {
            if (res.data.status === 'error') {
                throw new Error(res.data.message);
            }
        });
    }

    render() {
        return (
            <Grid className='mt-20'>
                <Row>
                    <SearchForm
                        articles={this.state.articles}
                        searchTerm={this.state.searchTerm}
                        startYear={this.state.startYear}
                        endYear={this.state.endYear}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validation={this.state.validator} />
                </Row>
                <Row>
                    <ArticleList articles={this.state.articles} saveArticle={this.saveArticle} />
                </Row>
            </Grid>
        );
    }
}

export default Main;
