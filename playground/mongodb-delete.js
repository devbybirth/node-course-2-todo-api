const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
	return console.log('Unable to connect to mongo DB server');

}
console.log('Console to Mongo DB Server');

// delete many
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
// console.log(result);
// });


// delete one
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
// console.log(result);
// });


// find one and delete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
// console.log(result);
// });


// db.collection('Users').deleteMany({name: 'Prashant Yadav'}).then((result) => {
// console.log(result);
// });

db.collection('Users').findOneAndDelete({
	_id: new ObjectID('5c2bd830212d6a0231542d19')
}).then((result) => {
console.log(result);
});


db.close();
});