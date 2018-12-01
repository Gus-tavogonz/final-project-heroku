const db = require("../models");


// Defining methods for the booksController
module.exports = {
 
  findById: function(req, res) {
    db.Video.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status (422).json(err))
  },

  find: function (req, res){
    console.log("Getting video from db!");
    db.Video.find().then(function(doc){
      res.json(doc);
    }).catch(function(err){
      res.json(err)
    })
  },

  insert: function(req, res){
    console.log("Saving video to db!");
    console.log("req:body ", req.body);
    db.Video.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  
  },

  remove:function(req,res){
    console.log("deleting a saved video from db!");
    db.Video.findById(req.params.id)
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  }

};
