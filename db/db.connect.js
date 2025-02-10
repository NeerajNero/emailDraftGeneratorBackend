import mongoose from "mongoose"

const initializeDatabase = async() => {
    try{
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log("connected to database")
    }catch(error){
        console.log("unable to connect to database")
    }
}

export default initializeDatabase