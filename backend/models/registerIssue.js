const {Schema, model} = require('mongoose')

const issueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = model('issue',issueSchema)