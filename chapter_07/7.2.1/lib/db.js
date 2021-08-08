const level = require('level')
const sublevel = require('level-sublevel')

// statefull 한 상태이다.
// sublevel로 instance를 만들어서 exports
module.exports = sublevel(
  level('example-db', { valueEncoding: 'json' })
)
