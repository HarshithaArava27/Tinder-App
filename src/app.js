const express = require('express');

const app = express();
//handling the server
app.get("/",(req,res)=>{
    res.send("Hello from the server");
});
//handling the server
app.get("/hello",(req,res)=>{
    res.send(" hello from hello");
});
//handling the server
app.get("/test",(req,res)=>{
    res.send("Hello from the test");
});

//creating server in port 3000
app.listen(3000,()=> {
    console.log("server is running successfully in port 3000.........");
});