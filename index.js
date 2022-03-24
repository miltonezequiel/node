const math=require('./matematicas');
const express= require('express');
const os = require('os');
const http = require('http');

const handleServer = (req,resp)=>{
    resp.writeHead(200,{'content-type':'application/json'});
    resp.write('{"name":"milton"}');
    resp.end();
}

const server = http.createServer(handleServer);

server.listen(8000,()=>console.log('server listen port 8000'));

const app = express();
app.use(express.json());

app.get('/',(req,resp)=> resp.send('node with Express'));
app.get('/about',(req,resp)=> resp.send('about me'));

app.post('/user',(req,resp)=> {
    console.log(req.body);
    resp.send('post received')});

app.delete('/user/:deletedID',(req,resp)=> {
    console.log(`el usuario ${req.params.deletedID} ha sido eliminado`);
    resp.send('method deleted received')});

app.listen(3000,()=> console.log('server on port 3000'));