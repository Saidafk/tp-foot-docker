const http = require('http');

const PORT = 3000; 

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.url === '/api/mercato' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const players = [
      { id: 1, name: "Kylian Mbappé", club: "Real Madrid" },
      { id: 2, name: "Erling Haaland", club: "Manchester City" }
    ];
    res.end(JSON.stringify(players));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend foot démarré sur le port ${PORT}`);
});