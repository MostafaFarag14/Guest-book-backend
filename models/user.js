const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema(
  {
    name : {
      type: String ,
      required: true ,
      minlength: 3
    },
    password: {
      type: String ,
      required: true ,
      minlength: 6
    },
    email: {
      type: String ,
      required: true ,
      unique: true
    },
    messages: [ {type: schema.Types.ObjectId, ref: 'message'}]
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User

