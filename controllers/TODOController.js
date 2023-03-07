const express=require('express');
const TODO = require('../models/TODO');


//******************************************************* Create *************************************** */
async function add (req, res, next) {
    console.log("resultat:" + req.body);
  
    try {
      const newTodo  = new TODO(req.body);
      newTodo.save((err, data) => {
        if (err) {
          console.log(err);
           
        }
        console.log(data);
        return res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  //********************************************************* update  ********************************** */

  async  function update(req, res, next) {
    const id = req.params.id;
    const TODO = req.body; 
    TODO.updateOne({ _id: id }, TODO, function(err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);

      return res.json({ message: 'TODO updated' });
    });
  }

  //********************************************************* delete **********************************************/

  async function deleteT(req,res){
    try{
      await TODO.findByIdAndRemove(req.params.id);
      //console.log()
      res.send("TODO deleted")
    }catch(err){
      res.send(err)
    }
  }

  //***********************************************************getAll ************************************************/
  async function getTodos  (req, res, next) {
    TODO.find()
      .then(todos => {
        res.status(200).json({
          message: 'TODOs fetched successfully!',
          todos: todos
        });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Fetching TODOs failed!'
        });
      });
  };
  //****************************************************FindById******************************************************/
  
 async function getTodoById (req, res, next) {
  TODO.findById(req.params.id)
    .then(todo => {
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ message: 'TODO not found!' });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching TODO failed!'
      });
    });
};
  module.exports={add,update,deleteT,getTodos,getTodoById}