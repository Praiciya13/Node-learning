const streamExample = require('fs');

const readStream = streamExample.createReadStream('./docs/hugeFile.txt');
const writeStream = streamExample.createWriteStream('./docs/copyHugeFile.txt');

readStream.pipe(writeStream)

