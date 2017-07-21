/**
 * @file test translator
 * @author X-Jray(z.xuanjian@gmail.com)
 */

const translator = require('../src/index');

let enStr = 'When you are old and grey and full of sleep,And nodding by the fire, take down this book, And slowly read。';

console.log('English: \n\n' + enStr);

translator(enStr).then(ret => {
    console.log('\nChinese: \n\n' + ret);
}).catch(err => {
    throw new Error(err);
});
