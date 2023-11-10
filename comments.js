// Create web server
// function
// 1. create web server
// 2. read file
// 3. send file
// 4. listen port

// 1. create web server
var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하겠다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // url을 분석하는 코드, true는 query string을 객체로 바꿔준다.
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    // console.log(__dirname + url);
    // response.end(fs.readFileSync(__dirname + url));
    response.end(queryData.id);
});
app.listen(3000); // 3000번 포트에 node.js 서버를 실행시키겠다.

// nodejs.org > docs > api > http > http.createServer > example
// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(3000);
// console.log('Server running at http://git add comments.js