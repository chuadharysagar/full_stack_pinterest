import express from "express"
import userRouter from './routes/user.route.js'
import pinRouter from './routes/pin.route.js'
import commentRouter from './routes/comment.route.js'
import boardRouter from './routes/board.route.js'
import connectDB from "./utils/connectDB.js"
import cors from 'cors'



// commad to start the server : node --watch --env-file=.env index.js
const app = express();

app.use(express.json()); // to freely use the json formate all across the application
app.use(cors());   // to access frontend from backend

// Database connection 

// when the req will come to /users then it will be redirected to the useRouter endPoint
app.use("/users",userRouter);
app.use("/pins",pinRouter);
app.use("/comments",commentRouter);
app.use("/boards",boardRouter);

app.listen(3000,()=>{
   connectDB();
   console.log("Server is Running!");
})