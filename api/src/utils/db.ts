import mongoose from "mongoose";
import "dotenv/config";


const uri: any = process.env.MONGO_URI
const options: any = { useNewUrlParser: true }
const connectDB = async () => {
    const conn: any = await mongoose.connect(uri, options)
    console.log(`Db connect : ${conn.connection.host}`)
}
export default connectDB