process.stdin
  .on('readable', () => {
    let chunk
    console.log('New data avaliable')
    while((chunk = process.stdin.read(2)) !== null) {
      console.log(`Chunk read: (${chunk.length}) "${chunk.toString()}"`)
    }
  })
  .on('end', () => process.stdout.write('End of stream'))