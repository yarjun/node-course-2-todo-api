const _ = require("lodash");

var express    = require("express");
var bodyparser = require("body-parser");
var {ObjectID} = require('mongodb');
var {mongoose} = require("./db/mongoose");
var {Todo}     = require("./models/todo");
var {User}     = require("./models/user");

var app = express();

const port = process.env.PORT || 3000;

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

app.delete('/todos/:id',function(req,res){
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(function(todo){
    if(!todo){
      return res.status(404).send();
    }
    res.status(200). send(todo);
  }).catch(function(e){
    res.status(400).send();
  });
});

app.patch('/todos/:id',function(req,res){
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if((_.isBoolean(body.completed)) && (body.completed))
  {
    body.completedAt = new Date().getTime();
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body} , {new: true}).then(function(todo){
    if(!todo){
      return res.status(404).send();
    }

    res.status(200).send(todo);
  }).catch(function(e){
    res.status(400).send(e);
  });
});

app.listen(port,function(){
  console.log(`starting on port ${port}`);
});
