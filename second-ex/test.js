const express= require('express')
const cors= require('cors')
const app=express()
const port =3500;
let value=0;
app.use(cors())
let count =0;
app.get("/", (req, res) =>{
    res.json({value})
})
app.get("/plus", (req, res) =>{
   value++;
   res.send({value})
})
app.get("/mins", (req, res) =>{
   value--;
   res.send({value})
})
// app.get("/zero", (req, res) =>{
//    value=0;
//    res.send({value})
// })
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})