import mongoose from "mongoose";
import 'dotenv/config.js'

const ConnectDB = () => {
    mongoose.connect(`${process.env.MONGO_URL}/StyleNest`)
    .then(() => {
        console.log("DataBase connected!")
    }).catch((error) => {
        console.log("error in connecting to database!", error);
    })
}
export default ConnectDB;