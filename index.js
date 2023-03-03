const express = require("express")
const cors =require("cors")
const port = 4555
const app =express()
const {postrouter}=require("./seveur/router/postRouter")
const {routermail}=require("./seveur/router/routermail")

app.use(express.json())
app.use(cors())

app.use("/",postrouter)
app.use("/",routermail)
app.listen(port,(error)=>{
    error?console.log(error) : console.log(`serveur is runing http://localhost:${port}`)
})

