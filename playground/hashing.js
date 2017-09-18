const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, function(err,salt){
  bcrypt.hash(password,salt,function(err,hash){
    console.log(hash);
  });
});

var hashedpassword = '$2a$10$VG.gnm7sleqtPypbER3t3.h6zNQhFhL8r1dh2jkcDMr0wSQ5YmSb2';

bcrypt.compare(password, hashedpassword, function(err, res){
  console.log(res);
});


// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// var message = 'I am user no 3';
// var hash = SHA256(message).toString();
//
// console.log(`message : ${message}`);
// console.log(`hash : ${hash}`);
//

// var data = {
//   id: 4
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
//
// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(token.hash === resulthash)
// {
//   console.log('data not changed');
// }
// else{
//   console.log('data is changed ,do not trust');
// }
