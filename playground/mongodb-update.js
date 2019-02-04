//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: 123
    }, {
        $set: {
            completed: false
        }//,
        //Inc nambah 1 (jadi umur 25 + 1)
        //$inc: {
            //age: 1
        //}
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    });
    
    //client.close();
});

