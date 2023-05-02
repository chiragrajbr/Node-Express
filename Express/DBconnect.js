let express=require ("express")
let app=express()
const port=3005
let mongoose=require("mongoose")

//connecting to DB
mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("connected successfully")
})
.catch((err)=>{err})

app.listen(port,()=>{
    console.log("server is running in the port",port)
})
