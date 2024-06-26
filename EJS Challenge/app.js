//jshint esversion:6
//npm install
//npm i -g nodemon
//npm i lodash
//npm install --save lodash

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

//Challenge 1 - access the home.ejs
//Challenge 2 - add the paragraph
app.get("/", function(req, res){
  res.render("home",{ 
    startingContent:homeStartingContent,
    posts: posts //Challenge 12 - create a link to home.ejs
  });
});

//Challenge 5 - access the about & contact pages
app.get("/about", function(req, res){
  res.render("about", {aboutContent:aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent:contactContent});
});

//Challenge 7 - add the compose page  (also edit accordingly the compose.ejs)
app.get("/compose", function(req, res){
  res.render("compose");
});

//Challenge 8 - console log the text written in the compose textbox
app.post("/compose", function(req, res){
  const post = { //Challenge 10 - create an object "post"
    title: req.body.postTitle,
    content: req.body.postBody
  };

  //Challenge 11 - create a global container to store the posts & redirect to home
posts.push(post);

res.redirect("/"); //redirect to home

});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.kebabCase(req.params.postName); //search for posts title, regardless of how it was written (lower/upper case)
  posts.forEach(function(post){
    const storedTitle = _.kebabCase(post.title);

    if(storedTitle === requestedTitle) {
      res.render("post", {  //create a page for each new post
        title:post.title,
        content: post.content
      });
    } 

  });

});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
