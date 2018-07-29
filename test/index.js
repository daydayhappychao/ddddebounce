const assert = require('assert');
const ddddebounce = require('../index');

let timer = 0;

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    ddddebounce(() => {
      timer++;
    }, 70);
  }, i * 10);
}

setTimeout(() => {
  try {
    assert.strictEqual(timer, 1);
    console.log('success');
  } catch (e) {
    console.log('fail');
  }
}, 200);