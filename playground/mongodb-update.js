const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
	return console.log('Unable to connect to mongo DB server');

}
console.log('Console to Mongo DB Server');
// db.collection('Todos').findOneAndUpdate({
// 	_id : new ObjectID('5c2d2866eebcaee2dd1ba445')
// }, {
// 	$set: {
// 		completed: true
// 	}
// }, {
// 	returnOriginal : false
// }).then((result) => {
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({
	_id : new ObjectID('5c2a943118e137036157f7c7')
}, {
	$set: {
		name: 'Amit'
	},
	$inc: {
		age:2
	}
}, {
	returnOriginal : false
}).then((result) => {
console.log(result);
});


db.close();
});