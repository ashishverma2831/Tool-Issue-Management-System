const express = require('express');
const router = express.Router();
const Model = require('../models/userModel.js');
const Issue = require('../models/registerIssue.js');

router.post('/created',async (req,res)=>{
    console.log(req.body);
    const {name,email,mobile,password,selectedRole} = req.body;

    await new Model({name,email,mobile,password,selectedRole}).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

router.post('/authenticate', async (req,res)=>{
    console.log(req.body);
    await Model.findOne(req.body)
    .then((result) => {
        if(result)
            res.json(result);
        else 
            res.status(401).json({message:'Invalid Credentials'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.post('/register-issue', async (req,res)=>{
    console.log(req.body);
    await new Issue(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

module.exports = router;