const express = require('express');
const app = express();
let port = 7777;
//atlase
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://afshin:12345678af@cluster0.prfrx.mongodb.net/articlatlas?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to articleserver');
});
const Article = require('./artiSHema')





app.get('/', function(req, res) {
    res.send("Test");

})

app.listen(port, () => {
    console.log(`it is run===>porst:${port}`);

})