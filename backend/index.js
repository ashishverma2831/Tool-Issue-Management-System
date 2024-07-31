const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/toolissuemanagement?retryWrites=true&w=majority')
.then((result) => {
    console.log('Mongoose Connected');
}).catch((err) => {
    console.log(err);
});

const UserRouter = require('./routers/userRouter.js');
const AddToolRouter = require('./routers/toolRouter.js')


app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use('/user',UserRouter);
app.use('/tool',AddToolRouter);


// Starting the Server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

// Routes
app.get('/',(req,res)=>{
    res.send('Response from the express server')
})