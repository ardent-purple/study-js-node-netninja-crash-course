const greet = name => console.log(`hello, ${name}`)

// greet('mario')
// greet('yoshi')

// console.log(global)

setImmediate(() => console.log('fires immediately'))
console.log('before setImmediate')
const time = 3000;
const interval = setInterval(() => console.log('interval fired'), 500);
global.setTimeout(() => {
  console.log(`firing after ${time}`)
  clearInterval(interval)
}, time)

console.log(__dirname)
console.log(__filename);
