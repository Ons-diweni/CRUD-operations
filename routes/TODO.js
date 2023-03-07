const express=require('express');
const router=express.Router();
const TODOcontroller=require("../controllers/TODOController")
const TODO=require('../models/TODO');
const TODOValidater = require ('../middlewares/TODOValidater')

 
router.post("/add",TODOValidater,TODOcontroller.add);
//router.post("/get",TODOcontroller.get);
router.put("/update/:id",TODOcontroller.update)



module.exports=router;