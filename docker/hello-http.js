const os = require('os');
const http = require('http');
let cnt = 0;

http.createServer((req, res) => {
    if (req.url.toLowerCase() === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        console.log('favicon requested');
        return;
    }

    res.end(`Node HELLO v1 on ${os.hostname()} ${cnt++} \n`);
}

).listen(5000);

console.log(`Server running at http://localhost:5000/`);
