//tache 1

console.log("HELLO WORLD");
//tache 2

const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>Hello Node!!!!</h1>\n");
}).listen(3000,()=>{
    console.log("server http://localhost:3000");
})
//tache 3
const fs = require("fs");

fs.open("welcome.txt","a+",(err,donn)=>{
    if(err){
        console.log(err);
    }
    fs.writeFile("welcome.txt","Hello Node",(err)=>{
        if(err){
            console.log(err);
        }
    });
    fs.readFile(donn,(erre,data)=>{
        if(erre){
            console.log(erre);
        }
        console.log(data.toString());
    })
});
