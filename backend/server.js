const app = require("./app");
const dotenv = require('dotenv');
const dbConn = require("./config/dbConnection/dbConnection");
dotenv.config({path:'./config/.env'});
const PORT = process.env.PORT 

dbConn()

app.listen(PORT,()=>{
    console.log('Server Running', PORT);
})