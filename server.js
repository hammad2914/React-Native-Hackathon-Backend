const express = require('express');
const app = express();
const cors = require("cors");

// import router
// const TNAHistoryRouter = require('./Routers/tnaHistoryRouter')



require("dotenv").config();
const mongoose = require('mongoose');
app.use(express.json())
app.use(cors())

// Api Url 

// app.use('/api/TNAhistory',TNAHistoryRouter);

mongoose.connect(process.env.MONGO_URI).then((res)=>{
    app.listen(process.env.PORT,()=>{
        console.log("Database connected successfully & server is listen on 5000...");
});

}).catch((err)=>{
console.log(err);
})