process.stdin
  .on('data', chunk => {
    console.log('New data avaliable')
    console.log(`Chunk read: (${chunk.length})`)
    // console.log(chunk.toString())
  })
  .on('end', () => process.stdout.write('End of stream'))