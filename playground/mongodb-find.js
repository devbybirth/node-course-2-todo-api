const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
	return console.log('Unable to connect to mongo DB server');

}
console.log('Console to Mongo DB Server');

// db.collection('Todos').find({
// 	_id: new ObjectID('5c2bdd6e3d7b1a34136e57ef')
// }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));

// }, (err) => {
// 	console.log('Unabe to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count) => {
// console.log(`Todos count : ${count}`);

// }, (err) => {
// 	console.log('Unabe to fetch todos', err);
// });

db.collection('Users').find({name: 'Prashant Yadav'}).toArray().then((docs) => {
console.log('Users');
console.log(JSON.stringify(docs,undefined,2));

}, (err) => {
	console.log('Unabe to fetch todos', err);
});

//db.close();
});