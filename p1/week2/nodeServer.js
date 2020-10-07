const http = require('http');
var osInfo = require("./osInfo");
const EventEmitter = require('events');
const dos = require("./dosDetector");
let DOS = new dos(3000);



const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    DOS.addUrl(req.url)

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({osInfo}))
    return res.end();
  }
  if (req.url === '/') {
    dos.addUrl(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>  
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {

  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("Port 3000 open");

DOS.on("DosDetector", (arg)=> {
    console.log("Attack by " + arg.url);
    console.log("Time between attacks "+ arg.timeBetweenCalls);
})

//Register for the "DosDetected" event and console.log the url and time info.
