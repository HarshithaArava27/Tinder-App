const express = require('express');

const app = express();
// non dynamic routes
//handling the server
app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send({firstname:"Harshitha",lastname:"Saiteja"});
});

// for dynamic routes
app.get("/user/:userId/:name/:pwd",(req,res)=>{
    console.log(req.params)
    res.send({firstname:"Harshitha",lastname:"Saiteja"});
});

app.post("/user",(req,res)=>{
    res.send("post successfully");
});

app.delete("/user",(req,res)=>{
    res.send("delete successfully");
});

//handling the server
app.use("/hello",(req,res)=>{
    res.send(" hello from hello");
});
//handling the server
app.use("/test",(req,res)=>{
    res.send("Hello from the test");
});
//handling the server
app.use("/",(req,res)=>{
    res.send("Hello from the server");
});

//creating server in port 3000
app.listen(3000,()=> {
    console.log("server is running successfully in port 3000.........");
});