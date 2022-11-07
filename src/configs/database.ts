import { Mongoose } from "mongoose";
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const conn: Mongoose = await mongoose.connect(process.env.DB_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDatabase