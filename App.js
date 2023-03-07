const event = require('node:events');

const eventEmitter = new event();
//
// eventEmitter.on('click', ()=>{
//     console.log('click!!!!')
// });
//
// eventEmitter.emit('click')
// eventEmitter.emit('click')
// eventEmitter.emit('click')
// eventEmitter.emit('click')
// eventEmitter.emit('click')
// eventEmitter.emit('click')

// eventEmitter.once('Click&DIe', ()=>{
//     console.log('click&Die!!!!')
// });
//
// eventEmitter.emit('Click&DIe')
// eventEmitter.emit('Click&DIe')
// eventEmitter.emit('Click&DIe')
// eventEmitter.emit('Click&DIe')
// eventEmitter.emit('Click&DIe')
// eventEmitter.emit('Click&DIe')

const fs = require('fs');
const path = require('node:path');

fs.mkdir(path.join(process.cwd(),'test'))


// const readStream = fs.createReadStream(path())