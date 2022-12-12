var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url.split("?")[0]
    if(url==="/"){
        res.writeHead(301,{Location:"/welcome"})
        res.end()
    }
    if(url==="/welcome"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Welcome to Dominos!")
    }else if(url==="/contact"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({  
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
           }))
    }else{
        res.writeHead(404)
        res.end()
    }
}

httpServer.listen(8081,()=>{console.log("server is up and running")})
module.exports = httpServer;