const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const URL = require('./routes/roustes')
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS , () => {
  console.log('Database connection successfully');
});
app.use(express.json())
app.use(cors())
app.use('/app', URL)
app.listen(5000, ()=>{
  console.log('listening on port 5000');
})