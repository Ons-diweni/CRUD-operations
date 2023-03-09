//importer le module express (c'est un Framework pour mettre en place des applications web basèe sur nodeJs)
const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');


require('dotenv').config();

//création d'une instance d'une application Express en appelant la fonction factory express().
//Ensuite, vous pouvez utiliser l'objet app pour configurer et gérer l'application Express
var app = express ()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Configurer TODORoute
const TODORouter=require('./routes/TODO');
app.use('/todo',TODORouter);


//Connection à la base de données 
mongoose.connect(process.env.dbURL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((erreur) => console.log('Connexion à MongoDB échouée !', erreur))







//exportation de l'instance app pour qu'elle soit visible et accessible par tous les modules dans ce projet
module.exports=app ; 