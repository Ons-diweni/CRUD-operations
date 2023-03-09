const express = require ('express')
const router = express.Router()
const TodoValidator = require('../middlewares/TODOValidater')
const  TodoController = require ('../controllers/TODOController')


// Route pour ajouter une tache dans la base de donnèe
router.post("/add" ,TodoValidator, TodoController.add)

// Route pour récupérer toutes les taches de la base de donnèe
router.get('/todos', TodoController.find);

// Route pour récupérer une tache par son ID
router.get('/:id', TodoController.find);

// Route pour supprimer une tache par son ID
router.delete('/delete/:id', TodoController.delete);

// Route pour modifier une tache par son ID
router.put('/update/:id', TodoValidator ,TodoController.update);


module.exports=router