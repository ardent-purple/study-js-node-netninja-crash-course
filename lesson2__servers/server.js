const http = require('http')
const fs = require('fs')



const server = http.createServer((req, res) => {
  let path = './views/';
  console.log(`Request url: ${req.url}`);
  switch (req.url) {
    case '/':
    case '/home':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      return
      break
    default:
      path += '404.html'
      res.statusCode = 404
      break
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(3000, 'localhost', () => {
  console.log('listening for 3000 port on localhost');
})
