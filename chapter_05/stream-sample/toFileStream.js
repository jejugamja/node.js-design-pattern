const stream = require('stream')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

class ToFileStream extends stream.Writable {
  constructor() {
    super({objectMode: true})
  }

  _write(chunk, encoding, callback) {
    const dirname = path.dirname(chunk.path)
    if (dirname === '.') {
      fs.writeFile(chunk.path, chunk.content, callback)
    } else {
      mkdirp(dirname, err => {
        if (err) {
          return callback(err)
        }
        fs.writeFile(chunk.path, chunk.content, callback)
      })
    }
  }
}

module.exports = ToFileStream

const tfs = new ToFileStream()

tfs.write({path: "file1.txt", content: "Hello"})
tfs.write({path: "file2.txt", content: "Node.js"})
tfs.write({path: "file3.txt", content: "Streams"})
tfs.end(() => console.log("All Files created"))