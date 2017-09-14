// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp",function(err,db){
  if(err){
    return console.log("unable to connect to mongodb server");
  }
  console.log("connected to mongodb server");

  // db.collection("todos").findOneAndUpdate({
  //   _id: new ObjectID("59b7b26d68a0bc60f0cbf341")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then(function(result){
  //   console.log(result);
  // });

  db.collection("userss").findOneAndUpdate({
      _id: new ObjectID("59b79474233a5227d8c76eae")
  },{
    $set: {
      name: "Arjun"
    },
    $inc: {
      age: 1
    }
  },
  {
    returnOriginal: false
  }).then(function(result){
    console.log(result);
  });

  // db.close();
});
