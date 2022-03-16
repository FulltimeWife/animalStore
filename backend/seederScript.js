require('dotenv').config();

const productsInStore = require('./data/productsInStore');
const connectDB = require('./config/db');
const productSchema = require('./models/productsSchema');

connectDB();
const importData = async () => {
    try {
        await productSchema.deleteMany({});
        await productSchema.insertMany(productsInStore);
        console.log("Data Import Success");
        process.exit();
        
    } catch (error) {
        console.error("Something went wrong importing the data.");
        process.exit(1);
    } 
}

importData();
