// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp",function(err,db){
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  // db.collection('todos').insertOne({
  //   text: "somthing to do",
  //   completed: false
  // },function(err,result){
  //   if(err){
  //     return console.log("unable to insert todo ",err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('userss').insertOne({
    name: "Arjun",
    age: 21,
    location: "Pune"
  },function(err,result){
    if(err){
      return console.log("unable to insert todo",err);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});
