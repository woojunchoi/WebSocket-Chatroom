const socket = io.connect('http://localhost:3000')

let message = document.getElementById('message')
let handle = document.getElementById('handle')
let output = document.getElementsByClassName('output')[0]
let btn = document.getElementById('send')
let feedback = document.getElementById('feedback')
//emit events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
    message.value='';
})

message.addEventListener('keypress', () => {
    socket.emit('typing',handle.value)
})

socket.on('chat',(data) =>{
    //reset feedback when click send
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing message..</em></p>'
})