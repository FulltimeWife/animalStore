require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRotes = require('./routes/productRoutes')

connectDB();

const app = express();

app.use(express.json());

app.use('/products', productRotes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has connected on ${PORT}`))