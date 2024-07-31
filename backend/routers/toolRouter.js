const express = require('express');
const router = express.Router();
const Tool = require('../models/addTool.js');

router.post('/tool-added',async (req,res)=>{
    console.log(req.body);
    const {toolName,toolDescription,toolImage,quantity} = req.body;

    await new Tool({toolName,toolDescription,toolImage,quantity}).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

router.get('/all',async (req,res)=>{
    await Tool.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

router.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    await Tool.findByIdAndDelete(id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

module.exports = router;