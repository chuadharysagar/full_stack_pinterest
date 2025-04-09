import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
   displayName: {
      type: String,
      required: true
   },
   userName: {
      type: String,
      required: true,
   },
   email: {
      type: Strig,
      required: true
   },
   img: {
      type: String
   },
   hashedPassword: {
      type: String,
      required: true
   },
},
   { timestamps: true } //when the user will be created or updated it will keep track of it 
);


export default mongoose.model("User", userSchema);
