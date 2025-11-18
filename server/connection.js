import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("MONGO_URL =", process.env.MONGO_URL);
        console.log('Error connecting to MongoDB:', error);
    }
};
