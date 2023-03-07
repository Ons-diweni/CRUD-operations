const yup = require ('yup')

const validate = async function(req , res , next) {

try {const schema = yup.object().shape({

    Name: yup.string().min(3).required() ,
    Matricule : yup.string().min(7).required() ,
    Score: yup.float().min(3).required() ,
    Email_user: yup.string().email().required(),
    Status: yup.boolean().required()
    
    }) ;
    await schema.validate(req.body) 
    next() ;
}
 catch (err) {console.log(err)
 res.json({error : err.errors})
}
 

}

module.exports = validate 