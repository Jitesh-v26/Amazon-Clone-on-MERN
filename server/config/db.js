const mongoose = require('mongoose');
//password- Mongodb@123
const dbURL = "mongodb+srv://jiteshvijay26:Mongodb@123@cluster0.ktf58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to DB");
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = connectDb;