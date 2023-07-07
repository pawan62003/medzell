const express = require('express');
const { connection } = require('./db');
const cors = require('cors');
const { ProductRoute } = require('./routes/product.route');

const app = express();
app.use(express.json())
app.use(cors())
app.use('/products',ProductRoute)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connect to database")
        console.log("server is running port 8080")
    } catch (error) {
        console.log("somthing error while connecting to database")
    }
})
