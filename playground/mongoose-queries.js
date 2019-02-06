const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c5a3c32b086800d8c207463';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}   
/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});*/

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Unable to find todo');
    }

    console.log(JSON.stringify(todo, undefined, 2));
    }, (e) => {
    console.log(e);
});