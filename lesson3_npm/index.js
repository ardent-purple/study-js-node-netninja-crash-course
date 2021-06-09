const _ = require('lodash')

const num = _.random(0, 20);
console.log(num);

const greet = () => {
  console.log('hello');
}

const greetOnce = _.once(greet)

greetOnce()
greetOnce()
