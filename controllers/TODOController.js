const express=require('express');
const TODO = require('../models/TODO');


//******************************************************* Create *************************************** */
async function add (req, res, next) {
    console.log("resultat:" + req.body);
  
    try {
      const TODO = new TODO(req.body);
      TODO.save((err, data) => {
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

  //********************************************************* delete ********************************** */

  async function deleteT(req,res){
    try{
      await TODO.findByIdAndRemove(req.params.id);
      //console.log()
      res.send("TODO deleted")
    }catch(err){
      res.send(err)
    }
  }

  module.exports={add,update,deleteT}