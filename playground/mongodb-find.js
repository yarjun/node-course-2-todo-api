// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp",function(err,db){
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  // db.collection("todos").find({
  //   _id: new ObjectID("59b7924a08f90e00506d08c4")
  // }).toArray().then(function(docs){
  //   console.log("todos");
  //   console.log(JSON.stringify(docs,undefined,2));
  // },function(err){
  //   console.log("unable to fetch data",err);
  // });

  // db.collection("todos").find().count().then(function(count){
  //   console.log(`todos count: ${count}`);
  //
  // },function(err){
  //   console.log("unable to fetch data",err);
  // });

  db.collection('userss').find({name: "Arjun"}).count().then(function(count){
    console.log(`count name: ${count}`);
  },function(err){
    console.log("unable to find",err);
  });


  // db.close();
});
