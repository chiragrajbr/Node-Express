let express=require("express")
let app=express()
app.use(express.json())
let port=3007
//to connect for database
const mongoose=require("mongoose")
//connect to database
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("connected to database")
})
.catch((e)=>{
    console.log(e)
}) 

app.get("/",(req,res)=>{
    res.json("getting the data")
})
//schema to create schema
const items=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number
    },
    price:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

//model to read data-provide 1-model name 2-schema name
const item=mongoose.model("item",items)

//to insert
app.post("/insert",(req,res)=>{
  let body=  req.body
    let list=new item(body)
    list.save()
    .then((b)=>{
        res.json(b)
    })
    .catch((e)=>{
        res.send(e)
    })


})

//to get all data
app.get("/all",(req,res)=>{
    item.find()
        .then(e=>res.json(e))
        .catch(e=>res.json(e))
    
})

//to find by id
app.get("/getdata/:id",(req,res)=>{
    const id=req.params.id
    item.findById(id)
    .then((item)=>{
        res.json(item)
    })
    .catch((e)=>{
        res.json(e)
    })
    })

//to delete by id
    app.delete("/delete/:id",(req,res)=>{
        let id=req.params.id
        item.findByIdAndDelete(id)
        .then((ele)=>{
            res.json(ele)
        })
        .catch((e)=>{
            res.json(e)
        })
    })



//update by id
app.put("/update/:id",(req,res)=>{
  const id=  req.params.id
  const body= req.body
  item.findByIdAndUpdate(id,body,{new:true,runValidators:true})//runvalidators -to revalidate on update for specific required field
       .then(e=>res.json(e))
       .catch(e=>res.json(e))
})



app.listen(port,()=>{
    console.log("server is running in the port",port)
})

