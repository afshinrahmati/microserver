const mongooes = require('mongoose');
const ArticleShema = new mongooes.Schema({
    tirle: {
        type: String,
        description: String
    }
});

module.exports = mongooes.model('Article', ArticleShema)