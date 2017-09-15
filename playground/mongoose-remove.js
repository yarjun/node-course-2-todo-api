const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then(function(result){
//   console.log(result);
// });

// Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59bc01ac98225414415bdb3f'}).then(function(todo){

});

Todo.findByIdAndRemove('59bc01ac98225414415bdb3f').then(function(todo){
  console.log(todo);
})
