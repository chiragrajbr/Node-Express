let express=require ("express")
let app=express()
//convert this express to json to avoid undefined and return data
app.use(express.json())
const port=3006

const customers=[{id:1,name:"chirag"},{id:2,name:"darshu"}]

//post method for insert
app.post('/customer',(req,res)=>{
    let a=req.body
    res.json(a)
    console.log(a)
}) 

//put method for update
app.put('/customer/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
  //  res.send(`update the data on ${id}`)
  res.send(body)
})

app.listen(port,()=>{
    console.log("server is running in the port",port)
})