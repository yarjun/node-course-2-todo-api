// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp",function(err,db){
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  //deletemany
  db.collection("userss").deleteMany({name: "Arjun"}).then(function(result){
    console.log(result);
  });
  // deleteone
  // db.collection("todos").deleteOne({text: "eat lunch"}).then(function(result){
  //   console.log(result);
  // });
  //findoneanddelete
  db.collection("userss").findOneAndDelete({_id: new ObjectID("59b7a064435337067cae90a7")}).then(function(result){
    console.log(result);
  });
  // db.close();
});
