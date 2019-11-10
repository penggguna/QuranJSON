const createServer = require('http').createServer
var fs = require('fs');
var quran = JSON.parse(fs.readFileSync('quran.json', 'utf8'));
createServer(function (_, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(quran));
}).listen(7777, () => console.log('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم\nListen on port: 7777'));