var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    text: String,
    idea_id: String,
    created_by: { type: String, default: 'anonymous' },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', CommentSchema);