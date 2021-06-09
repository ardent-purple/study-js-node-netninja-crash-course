const fs = require('fs')

const readStream = fs.createReadStream('./streams.txt', 'utf-8')
const writeStream = fs.createWriteStream('./streams_out.txt')

// readStream.on('data', chunk => {
//   console.log('------- new chunk -------')
//   // console.log(chunk);
//
//   writeStream.write('\n------ new chunk\n')
//   writeStream.write(chunk)
// })

// pipes
readStream.pipe(writeStream)
