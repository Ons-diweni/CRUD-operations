var mongoose = require('mongoose')

const TODOShema = mongoose.Schema(
    Name = { type: String},
    Matricule = { type: String },
    Score = { type: Number  },
    Status = { type: Boolean },
    Email_user = { type: String },
    )


module.exports = mongoose.model('TODO', TODOShema)