const express=require('express');
const router=express.Router();
const TODOcontroller=require("../controllers/TODOController")
const TODO=require('../models/TODO');
const TODOValidater = require ('../middlewares/TODOValidater')

 
router.post("/add",TODOValidater,TODOcontroller.add);
router.get("/getAll",TODOcontroller.getTodos);
router.get("/getById/:id",TODOcontroller.getTodoById);
router.put("/update/:id",TODOcontroller.update)
router.delete("/delete",TODOValidater,TODOcontroller.deleteT);



module.exports=router;