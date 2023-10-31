const express = require('express');
const app = express();
app.use(express.json());
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://sharmamunnu555:qdoDpzP8Wc9Wam8h@test-pro-db.ehudqmb.mongodb.net/?retryWrites=true&w=majority")

app.use(bodyParser.json());

const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node js api documentation for MongoDB",
            version: "1.0.0"
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./routes/books.js']
   }


// Use the books route
app.use('/', require('./routes/books'));
app.use('/testing', swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)))


const port=8000;
app.listen(port, ()=>{
    console.log(`server is running on ${port} port`)
});
