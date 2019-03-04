//client program for talking and sending commands to server 
const readline = require('readline');

console.log('Client starting');

//boot sockets
const client = io.connect('http://localhost:8080');
client.on('welcome', (message) => {
    console.log(message);
});

//handle user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (input) => {
    client.emit('test', input);
    console.log('ok');
});
