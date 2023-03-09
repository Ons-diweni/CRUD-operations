const express = require ('express')
const TODO = require ('../models/TODO')


//***************************** Endpoint to Create a todo ****************/

 exports.add = (req , res , next ) => {
    console.log(req.body)
    if(Object.keys(req.body).length === 0){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const newTodo  = new TODO ({...req.body})
    newTodo.save()
    .then((todo)=>res.status(201).json({message:"Todo added with sucess !" , todo }))
    .catch(err => res.status(400).json({message : err.message || "Some error occurred while creating a Todo"}));
    
  }

//***************************** Enpoint to  (get All todos - get todo By Id )  ******************/

exports.find = (req , res , next ) => {
 
    const id = req.params.id ;
    (id)? TODO.findOne({_id :req.params.id })
    .then((todo) => {(todo)? res.send(todo):res.status(404).send({message :"Not found todo with id "+ req.params.id })})
    .catch((err) =>res.status(500).send({ message: "Error retrieving todo with id " + req.params.id}))
    :TODO.find()
    .then((todos) => res.send(todos))
    .catch((err)=> res.send({message : "Error retrieving todos"}))
} 

//**************************** Endpoint to delete a todo **************** */

exports.delete = (req, res)=>{
    const id = req.params.id;
    TODO.findByIdAndDelete(id)
    .then(todo => { (!todo)?  res.status(404).send({ message : `Cannot Delete todo with id ${id}. Maybe id is wrong`})
    :res.send({ message : "todo was deleted successfully!"}) })
    .catch(err =>{res.status(500).send({message: "Could not delete todo with id=" + id  , error : err}); });
}


//**************************** Endpoint to update a User **************** */
exports.update = (req, res)=>{

    if(Object.keys(req.body).length === 0){ return res.status(400).send({ message : "todo with new informations must be provided"})}

    const id = req.params.id;

    //The { useFindAndModify: false} option is used to avoid using the deprecated findAndModify() method
    //The { new: true } option tells Mongoose to return the updated document instead of the original one.
    TODO.findByIdAndUpdate(id,req.body, { useFindAndModify: false , new: true})
    .then(todo => {(!todo) ? res.status(404).send({ message : `Cannot Update todo with ${id}. Maybe todo not found!`}) :res.send(todo)})
    .catch(err => res.status(500).send({ message : "Error Update todo informations" , error : err}))
}


