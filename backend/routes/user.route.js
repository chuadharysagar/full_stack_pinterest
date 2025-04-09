import express from "express"

const router = express.Router();

router.get("/test",(req,res)=>{
   res.json("hello from user router testing");
})


export default router;