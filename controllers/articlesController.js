const db = require("../models");

// Defining methods for the booksController
module.exports = {
 

  find: function (req, res){
    console.log("Getting artcticles from db!");
    Article.find().then(function(doc){
      res.json(doc);
    }).catch(function(err){
      res.json(err)
    })
  },

  insert: function(req, res){
    console.log("Saving article do db!");
    console.log("req:body ", req.body);
    Article.create(req.body).then(function(doc){
      res.json(doc);
      console.log("doc:", doc);
    }).catch(function(err){
      res.json(err);
    });
  },

  delete:function(req,res){
    console.log("deleting a saved article fomr db!");
    Article.remove({
      _id:req.params.id
    }).then(function(err){
      res.json(err)
    });
  }

};
