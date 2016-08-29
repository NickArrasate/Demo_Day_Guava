var http =require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('<h1>hello</h1>');
  res.end();
});

var port = Number(process.env.PORT || 3000);

server.listen(port);
