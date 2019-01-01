//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'Prashant', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
	return console.log('Unable to connect to mongo DB server');

}
console.log('Console to Mongo DB Server');

// db.collection('Todos').insertOne( {
// text: 'Something to do',
// completed : false
// }, (err, result) => {
// 	if(err) {
// 		return console.log('Unable to insert to do',err);
// 	}
// 	console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne( {
// name: 'Prashant Yadav',
// age : 25,
// location : 'delhi'
// }, (err, result) => {
// 	if(err) {
// 		return console.log('Unable to insert User',err);
// 	}
// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// });

db.close();
});