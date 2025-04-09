import mongoose from "mongoose";

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL).then(console.log("Db connected"));
   } catch (error) {
      console.log("MONGODB CONNECTION ERROR",error);
   }
};

export default connectDB;