const express = require('express')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const {errorHandler}=require('./middlewares/error/error')

//Modules
const routers=require('./routes/index')

//Creating app
const app = express();

//Configurations
dotenv.config({path:'.env'});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cookieParser())



//Router Connection
app.use('/api', routers)

app.get('/', (req,res) => {
    res.send('Welcome to Ai-Math-tutor-backend');
})

//Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is Listening on Port : ",PORT);
})
