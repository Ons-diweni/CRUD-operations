//importer le module express (c'est un Framework pour mettre en place des applications web basèe sur nodeJs)
const express = require('express')


//création d'une instance d'une application Express en appelant la fonction factory express().
//Ensuite, vous pouvez utiliser l'objet app pour configurer et gérer l'application Express
var app = express ()




//exportation de l'instance app pourqu'elle soit visible et accessible par tous les modules dans ce projet
module.exports=app ; 