const mongoose = require('mongoose');
const uri = "mongodb://db:27017/products";
const connectDB = async () => {
    try {
        await mongoose.connect(uri , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;
