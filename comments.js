import { createServer } from 'http';
// create a web server that listens on port 3000
const server = createServer((req, res) => {
    // handle requests here
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
