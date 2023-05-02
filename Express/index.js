//express js
let express=require ("express")
let app=express()
const port=3005

const customers=[{id:101,name:"chirag"},{id:102,name:"chirag"}]
app.get("/",(req,res)=>{
    res.send("welcome to the website")
})
app.get("/customers",(req,res)=>{
    res.send(customers)
})

app.get("/customers/:id",(req,res)=>{
    const id=req.params.id
    const customer=customers.find(customer=>customer.id==id)
    if(customer){
        res.send(customer)
    }else {
        res.send({})
    }
})


app.listen(port,()=>{
    console.log("server is running in the port",port)
})
