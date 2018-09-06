console.log('starting app');

const fs = require('fs');
const os = require('os');
const note = require('./note.js');
const _ = require('lodash');
var res = note.add(9,5);
console.log('Result :' + res);

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('hi.txt', `   Hello ${user.username} ! Your are ${note.age}  ` ,(err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });