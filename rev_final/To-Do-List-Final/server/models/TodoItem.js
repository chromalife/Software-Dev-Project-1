var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

var TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = exports = TodoItem;