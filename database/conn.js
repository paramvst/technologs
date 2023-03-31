import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const connectDB =async ()=>{
    const uri = process.env.URL //"mongodb+srv://Param:123@mern.t1ihphj.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Successfully connected to database")
    } catch (error) {
        console.log("An error occured while connecting to database")
        console.log(error);
    } finally {
        await client.close();
    }
}
export default connectDB

