const path = require("path");
const express = require("express");
const fs=require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparsor=require('body-parser');
main().catch(err => console.log(err));
const port = 80;
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/details',{ useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connected")
}
const loginSchema = new mongoose.Schema({
  username: String,
  password:String
});
const Userlogin = mongoose.model('Loguser', loginSchema);
app.use(express.static(path.join(__dirname, '/')));
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'/', 'index.html'));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,'/', 'about.html'));
});
app.get("/startups", (req, res) => {
  res.sendFile(path.join(__dirname,'/', 'about.html'));
});
app.get("/lawyers", (req, res) => {
  res.sendFile(path.join(__dirname,'/', 'about.html'));
});
app.post('/submit', (req, res) => {
  let logindata =new Userlogin(req.body);
  logindata.save().then(()=>{
    res.redirect('/');
  }).catch(()=>{
    res.status(404).send("Error 404 not found");
  });
  
});
app.listen(port, () => {
  console.log(`Port 80 running at http://localhost//${port}`);
});
