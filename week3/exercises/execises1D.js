const http = require('http');
const OpgavetB = require("./execises1");




 const server = http.createServer(async (req, res) => {
    if (req.url === '/api/securerandoms') {
        
  
    res.setHeader('Content-Type', 'application/json');
    let result =  await OpgavetB([48, 40, 32, 24, 16, 8])
    res.write(JSON.stringify({result}))
    return res.end();
    }
    if (req.url === '/') {

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