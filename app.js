const http=require("hhtp");
cont server=http.create server((req,res)=>{
  res.writeHead(200,{"content-type""Text/plain"});
  res.end("Hello! CI/CD Pipeline is working sucessfully.");
});
server.listen(3000,(0=>{
              console.log("Application running on port 3000);
});
