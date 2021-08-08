const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

const server = http.createServer((req, res) => {
  const filename = req.headers.filename
  console.log('File request received : ' + filename)

  req.pipe(zlib.createGunzip()) // 압축 해제 스트림 
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => {
      res.writeHead(201, { 'Content-Type': 'text/plain'})
      res.end('That`s it\n')
      console.log('File saved ' + filename)
    })
})

server.listen(3000, () => console.log('Listening'))