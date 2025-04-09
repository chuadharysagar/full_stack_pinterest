import express from "express"
import userRouter from './routes/user.route.js'

// commad to start the server : node --watch --env-file=.env index.js
const app = express();

// when the req will come to /users then it will be redirected to the useRouter endPoint
app.use("/users",userRouter);

app.use("/test",(req,res)=>{
   res.send("hello from backend");
})

app.listen(3000,()=>{
   console.log("Server is Running!");
})