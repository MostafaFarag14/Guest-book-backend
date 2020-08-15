const mongoose = require('mongoose')

const schema = mongoose.Schema
const messageSchema = new schema(
  {
    content: {
      type: String,
      required: true
    },
    owner: {
      type: schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    reply: {
      type: Boolean
    },
    replies: [{
      type: schema.Types.ObjectId,
      ref: 'message'
    }]
  },
  {
    timestamps: true
  }
)

const message = mongoose.model('message', messageSchema)

module.exports = message