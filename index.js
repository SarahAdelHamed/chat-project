 const express = require('express');
 const app = express();
 const path = require('path')
 const http = require('http');

 const { Server } = require("socket.io");  // get sever from socket.io

 const server = http.createServer(app) // create my own server (seperated from http server)
 const io = new Server(server); // connect to server
 
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname,'index.html') );
    });
    
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            io.emit('send message to all users', msg); //create event called(send message to all users)
          });
    });
    
    server.listen(3000, () => {
        console.log("http://localhost:3000/");
    });
    // app.get('/chat', (req, res) => {
        //   res.sendFile(__dirname + '/public/chat.html');
        // });
        
        // app.post('/chat', (req, res) => {
            //     const userName = req.body.name;
            //     res.sendFile(__dirname + '/public/chat.html');
            //     io.emit('chat message', `${userName} has joined the chat.`);
            //   });
            
            // io.on('connection', (socket) => {
                //   console.log('A user connected');
                
                //   socket.on('disconnect', () => {
                    //     console.log('User disconnected');
                    //   });
                    
                    //   socket.on('chat message', (msg) => {
                        //     io.emit('chat message', msg);
                        //   });
                        // });
                        
                        // const PORT = process.env.PORT || 3000;
                        
                        
                        
                        
                        
                        
                        // const socketIO = require('socket.io');
                        
                        // const server = http.createServer(app);
                       // const bodyParser = require('body-parser');
                       // app.use(bodyParser.urlencoded({ extended: true }));
                       
                       // app.use(express.static('public'));

// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// app.use(express.static('public'));

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });

//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log("http://localhost:3000/");
  
// });
