const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const MongoClient = require('mongodb').MongoClient;
app.get('/api/customers', (req, res) => {
    const customers = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            id: 2,
            firstName: 'Mary',
            lastName: 'Smith'
        },
        {
            id: 3,
            firstName: 'Tony',
            lastName: 'Stark'
        },
    ];
    res.json(customers)
})
// MongoClient.connect("mongodb://localhost:27017/blogdb",{useUnifiedTopology: true})
MongoClient.connect("mongodb://localhost:27017/blogdb", { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB!!");
        const db = client.db('blogdb');
        console.log("Connected to db");
        const blogs = db.collection('blogs');


        app.get('/api/blogs',(req,res) =>{
            db.collection('blogs').find().toArray()
            .then(results =>{
                res.send(results);
            })
            .catch(error => console.error(error))
        })

        app.get('/api/blogs/:id', (req,res) =>{ //api for getting blogs
            db.collection('blogs').find({'id':req.params.id}).toArray()
            .then(results =>{
                res.send(results);
            })
            .catch(errors => console.error(errors))
            // res.send(req.query);    //format of req is id, name, content(in md) 
        })
    })
    .catch(error => console.error(error))




const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}!`)
})
