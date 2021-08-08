const stream = require('stream')
const utin = require('util')

class ReplaceStream extends stream.Transform {
  constructor(searchString, replaceString) {
    super()
    this.searchString = searchString
    this.replaceString = replaceString
    this.tailPiece = ''
  }

  _transform(chunk, encoding, callback) {
    const pieces = (this.tailPiece + chunk).split(this.searchString)
    const lastPiece = pieces[pieces.length - 1];
    const tailPieceLen = this.searchString.length - 1

    this.tailPiece = lastPiece.slice(-tailPieceLen)
    pieces[pieces.length -1] = lastPiece.slice(0, -tailPieceLen)

    this.push(pieces.join(this.replaceString))
    callback()
  }

  _flush(callback) {
    this.push(this.tailPiece)
    callback()
  }
}

module.exports = ReplaceStream

const rs = new ReplaceStream('World', 'Node.js')
rs.on('data', chunk => console.log(chunk.toString()))

rs.write('Hello W')
rs.write('orld!')
rs.end()

process.stdin
  .pipe(new ReplaceStream(process.argv[2], process.argv[3]))
  .pipe(process.stdout)