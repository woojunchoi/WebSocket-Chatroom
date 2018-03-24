const express = require('express')
const app = express();

app.listen(3000, () => {
    console.log('connected to server')
})

app.use(express.static(__dirname+'/public'))