let express=require ("express")
let app=express()
app.use(express.json())
const port=3005
let mongoose=require("mongoose")

//connecting to DB
mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("connected successfully")
})
.catch((err)=>{err})



//creating schema
const stall=new mongoose.Schema({
    items:{
        type:String},
    price:{
        type:Number},
    quantity:{
        type:Number
    },
    date:{
        type:Date
    }
    
})

//model-table name
const items=mongoose.model("items",stall)

//api creation
app.get("/api/items",(req,res)=>{
        items.find()
        .then((i)=>{
            res.json(i)
        })
        .catch((err)=>{
            res.send(err)
        })

})

//insert data
app.post("/insert/items",(req,res)=>{
    const body=req.body
   /*
    new items(body).save()
    .then((items)=>{
        res.json(items)
    })
    .catch((err)=>{res.json(err)})
    */
   const list=new items(body)
   list.save()
   .then((items)=>{
    res.json(items)
   })
   .catch((err)=>{res.json(err)})
    
   
})

app.listen(port,()=>{
    console.log("server is running in the port",port)
})

