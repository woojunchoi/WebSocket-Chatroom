const express = require('express')
const app = express();
const socket = require('socket.io')

//local server setup
const server = app.listen(3000, () => {
    console.log('connected to server')
})

//serve static files 
app.use(express.static(__dirname+'/public'))

const io = socket(server);
io.on('connection', (socket) => {
    console.log('socket connected', socket.id)

    socket.on('typing', (data) => {
        //broadcast is emitting data to everyone except the one who emitted.
        socket.broadcast.emit('typing',data)
    })

    socket.on('chat', function(data) {
        //send data to all connected sockets. thats why we use io.sockets
        io.sockets.emit('chat',data)
    })
})