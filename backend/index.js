const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;


mongoose.connect(process.env.MONGO_DB_URI)
.then((result) => {
    console.log('Mongoose Connected');
}).catch((err) => {
    console.log(err);
});

const UserRouter = require('./routers/userRouter.js');
const AddToolRouter = require('./routers/toolRouter.js')
const utilRouter = require('./routers/util.js')


app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use('/user',UserRouter);
app.use('/tool',AddToolRouter);
app.use('/util',utilRouter);
app.use('/uploads',express.static('uploads'))


// Starting the Server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

// Routes
app.get('/',(req,res)=>{
    res.send('Response from the express server')
})