const { Schema, model } = require("mongoose");

const addToolSchema = new Schema({
    toolName: { type: String, required: true },
    toolDescription: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true }
}, { timestamps: true })

module.exports = model('tool', addToolSchema);