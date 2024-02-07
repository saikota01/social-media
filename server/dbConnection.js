require('dotenv').config();

const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(()=>console.log('Connected to mongoDB!')).catch(err=>console.log(err));
