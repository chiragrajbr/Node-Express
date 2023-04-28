let http=require('http')

let port=3005
let server=http.createServer(function(req,res){
    if(req.url==="/"){
        res.end("welcome to website")
    }else if(req.url==="/about"){
        res.end("welcome to about page")
    }else if(req.url==="/users"){
        const users=[{id:101,name:"chirag"},{id:102,name:"chirag raj br"}]
        res.end(JSON.stringify(users))
    }else if(req.url==="/date"){
        const date=new Date();
        res.end(date.toLocaleDateString())
    }else if(req.url==="/time"){
        res.end(date.toLocaleTimeString())
    }
    
    
})
server.listen(port,function(){
    console.log("server is running on port",port)
})