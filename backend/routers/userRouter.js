const express = require('express');
const router = express.Router();
const Model = require('../models/userModel.js');
const Issue = require('../models/registerIssue.js');

router.post('/created', async (req, res) => {
    console.log(req.body);
    const { name, email, mobile, password, selectedRole } = req.body;

    // await Model.findOne({ email: email,mobile: mobile })
    //     .then((result) => {
    //         if (result) {
    //             res.status(400).json({ message: 'User already exists' })
    //         }
    //         else {
    //             new Model({ name, email, mobile, password, selectedRole }).save()
    //                 .then((result) => {
    //                     res.json(result)
    //                 }).catch((err) => {
    //                     console.error(err);
    //                     res.status(500).json(err)
    //                 })
    //         }
    //     }).catch((err) => {
    //         console.error(err);
    //         res.status(500).json(err)
    //     })

    await new Model({ name, email, mobile, password, selectedRole }).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        })

    // const emailUser = await Model.findOne({email: email});
    // // console.log(emailUser);
    // const mobileUser = await Model.findOne({mobile: mobile});
    // // console.log("hello"+ await Model.findOne({ email: email }));
    // if (emailUser.email === email) {
    //     res.status(400).json({ message: 'Email already exists' })
    // }
    // else if (mobileUser.mobile === mobile) {
    //     res.status(401).json({ message: 'Mobile Number already exists' })
    // }
    // else {
    //     new Model({ name, email, mobile, password, selectedRole }).save()
    //         .then((result) => {
    //             res.json(result)
    //         }).catch((err) => {
    //             console.error(err);
    //             res.status(500).json(err)
    //         })
    // }

})

router.post('/authenticate', async (req, res) => {
    console.log(req.body);
    await Model.findOne(req.body)
        .then((result) => {
            if (result)
                res.json(result);
            else
                res.status(401).json({ message: 'Invalid Credentials' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
})

router.post('/register-issue', async (req, res) => {
    console.log(req.body);
    await new Issue(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
})

router.get('/get-issues', async (req, res) => {
    await Issue.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
})

router.delete('/delete-issue/:id', async (req, res) => {
    console.log(req.params.id);
    await Issue.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
})

module.exports = router;