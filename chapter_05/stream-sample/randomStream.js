const stream = require('stream');
const Chance = require('chance');
const chance = new Chance();

class RandomStream extends stream.Readable {
  constructor(options) {
    super(options)
  }

  _read(size) {
    const chunk = chance.string();
    console.log(`Pushing chunk of size: ${chunk.length}`)

    this.push(chunk, 'utf8')
    if (chance.bool({likelihood: 5})) {
      this.push(null)
    }
  }
}

module.exports = RandomStream

const rs = new RandomStream()
rs.on('readable', () => {
  let chunk;
  while((chunk = rs.read()) !== null) {
    console.log(`Chunk received Size: ${chunk.toString().length}`)
    console.log(`Chunk received: ${chunk.toString()}`)
  }
})