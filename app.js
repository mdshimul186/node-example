// const http = require('http');


// const server = http.createServer(async (req, res) => {
//     if (req.url === '/' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`<h1>Hello world!!!!</h1>`);
//     } else if (req.url === '/api' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ data: "example api" }));
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Route not found!' }));
//     }
// });


const express = require('express')
const app = express()

app.use(express.json())

app.post("/api-post",(req,res)=>{
    let {data} = req.body
   res.status(200).json({data:data})
})
app.get("/",(req,res)=>{
    res.send(`<h1>hello world</h1>`)
})


app.get("/api",(req,res)=>{
   res.status(200).json({data:"demo"})
})


const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));









