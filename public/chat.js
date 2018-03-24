const socket = io.connect('http://localhost:3000')

let message = document.getElementById('message')
let handle = document.getElementById('handle')
let output = document.getElementsByClassName('output')[0]
let btn = document.getElementById('send')

//emit events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
    message.value='';
})

socket.on('chat',(data) =>{
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})