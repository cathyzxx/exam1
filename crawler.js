const https = require('http');

function crawler(cb) {
  const req = https.get('http://39.99.185.180:3000/albums');
  req.end();
  req.on('response', (res) => {
    res.on('data', (data) => {
      cb(JSON.parse(data.toString()))
    })
  });
}

module.exports = crawler