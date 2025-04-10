import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
   displayName: {
      type: String,
      required: true
   },
   username: {
      type: String,
      required: true,
   },
   email: {
      type: String,
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
