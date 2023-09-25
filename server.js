const express = require('express');

const dotenv = require('dotenv');

const app = express();

const Router = require('./routers/index.router');

const mongoDB = require('./database/mongo');

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/',Router);


app.use((req,res,next)=> {
    // handle 404 not found
    const error = new Error('404 not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=> {
    // handle error  
    res.status(error.status || 500).json({
        status: 'failed',
        message: error.message || 'Internal server error',
    });
});

app.listen(port,()=>{
    console.log(`Connect success server port ${port}`);
});