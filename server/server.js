var express    = require("express");
var bodyparser = require("body-parser");
var {ObjectID} = require('mongodb');
var {mongoose} = require("./db/mongoose");
var {Todo}     = require("./models/todo");
var {User}     = require("./models/user");

var app = express();

app.use(bodyparser.json());

app.post("/todos",function(req,res){
  var todo = new Todo(
    {
    text: req.body.text
  });

  todo.save().then(function(doc){
    res.send(doc);
  },function(err){
    res.send(err);
});
});

app.post("/user",function(req,res){
  var user = new User({
    email: req.body.text
  });

  user.save().then(function(doc){
    res.send(doc);
  },function(err){
    res.status(400).send(err);
  });
});

app.get("/todos",function(req,res){
  Todo.find().then(function(todos){
    res.send({todos});
  },function(err){
    res.status(400).send(err);
  });
});

app.get('/todos/:id',function(req,res){
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then(function(todo){
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  },function(e){
    res.status(400).send();
  });

});


app.listen(3000,function(){
  console.log("started on port 3000");
});
