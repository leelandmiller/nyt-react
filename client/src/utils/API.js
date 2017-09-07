import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'd12f3db4e7a54a739f5d30ec881da9bc';

const API = {
    NYTsearch: function(query) {
        let paramsObj = {
            'api-key': API_KEY,
            'q': query.searchTerm
        };

        if (query.startYear) {
            paramsObj.begin_date = query.startYear + '0101';
        }

        if (query.endYear) {
            paramsObj.end_date = query.endYear + '1231';
        }

        return axios.get(BASE_URL, {
            params: paramsObj
        });
    },
    getSavedArticles: function() {
        return axios.get('/api/savedarticles');
    },
    saveArticle: function(article) {
        return axios.post('/api/savedarticles', {
            article
        });
    },
    removeSavedArticle: function(articleId) {
        return axios.delete(`/api/savedarticles/${articleId}`);
    }
}

export default API;
