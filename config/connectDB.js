//1
const mongoose = require("mongoose")

//2

const connectDB = async () => {
    try {
        mongoose.set("strictQuery" , false )
        await mongoose.connect(process.env.DB_URI , {useNewUrlParser : true } ) ; 
        console.log("database is connected")
    } catch (error) {
        console.log("cannot connect to database")
    }
}

//3

module.exports = connectDB
