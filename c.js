'use strict';

var http = require('http');
var url = require('url');
var PORT = 8888;
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8'}); // 这里设置utf-8解决乱码问题
    // response.setEncoding('utf-8');
    response.write('测试');
    response.end();
}).listen(PORT);

console.log('hello World');
