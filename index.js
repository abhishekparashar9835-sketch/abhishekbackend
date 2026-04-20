require('dotenv').config()
const express= require('express')
const app = express()
const port = 4000;
app.get('/',(req,res)=>{
    res.send("Hello Abhishek");

})
app.get('/email',(req,res)=>{
    res.send("abhishek@gmail.com")
})
app.get('/youtube',(req,res)=>{
    res.send("youtube.com")
})
app.get('/abhishek',(req,res) => {
    res.send("hello I am Abhishek Parashar B.tech");
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port} `)
})
