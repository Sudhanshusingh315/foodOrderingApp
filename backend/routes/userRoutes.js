const routes = require('express').Router();

routes.get("/",(req,res)=>{
    res.send("working fine")
})



exports.routes = routes;