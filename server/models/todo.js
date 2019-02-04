var mongoose = require('mongoose');

// save new something
var Todo = mongoose.model('todo', {
    text: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = {Todo};