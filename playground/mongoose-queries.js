const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = "59b8d444ee069421980019c1";

// if(!ObjectID.isValid(id)){
//   console.log('IT is not valid');
// }

// Todo.find({
//   _id: id
// }).then(function(todos){
//   console.log("Todos",todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(function(todo){
//   console.log("Todos",todo);
// });

// Todo.findById(id).then(function(todo){
//   if( !todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by id',todo);
// }).catch(function(e){
//   console.log(e);
// });

User.findById(id).then(function(user){
  if(!user){
    console.log('ID not found');
  }
  console.log(JSON.stringify(user,undefined,2));
},function(e){
  console.log(e);
})
