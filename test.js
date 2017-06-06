/**
 * @file test translator
 * @author jray(z.xuanjian@gmail.com)
 */

const translator = require('./index');

let enStr = 'When you are old and grey and full of sleep,And nodding by the fire, take down this book, And slowly read。';

console.log('原文: \n\n' + enStr);

translator(enStr).then(ret => {
    console.log('\n\n译文: \n\n' + ret);
}).catch(err => {
    throw new Error(err);
});
