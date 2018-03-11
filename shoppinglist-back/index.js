const http = require('http');
const port = 3000
const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

let shopItemSchema = new Schema({
    name: String,
    amount: Number
});

const app = express();

const db = 'mongodb://localhost:27017/shoppinglist';

//connect().on('error', console.log).on('disconnected', connect).once('open', listen);
const requestHandler = (request, response) => {
    console.log(request.url);
    //response.end('Hello aliens!');
    // temp place
    

}

const server = http.createServer(requestHandler);

function listen() {
    app.listen(port);
    console.log('Express started on ' + port);
}

function connected() {
    console.log("OOF");

    
}

server.listen(port, (err) => {
    if (err)
        return console.log('error', err);

    console.log('server is listening on ' + port);

    mongoose.connect('mongodb://localhost/').then(connected).catch(() => {
        console.log("AAAAAA");
    });
});