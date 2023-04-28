//express js
let express=require ("express")
let app=express()
const port=3005

const costomers=[{id:101,name:"chirag"},{id:102,name:"chirag"}]
app.get("/",(req,res)=>{
    res.send("welcome to the website")
})
app.get("/costomers",(req,res)=>{
    res.send(costomers)
})


app.listen(port,()=>{
    console.log("server is running in the port",port)
})
