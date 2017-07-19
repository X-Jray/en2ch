en2ch
===
[ ![Travis CI Status](https://travis-ci.org/X-Jray/en2ch.svg?branch=master)](https://travis-ci.org/X-Jray/en2ch.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Use baidu fanyi api, archieve English to Chinese translate. 

## Prepare

```
npm i en2ch --save
```

## Use


```
const en2ch = require('en2ch');

en2ch('hello world').then(ret => {
    // 你好世界
    console.log(ret);
}).catch(err => {
    console.log(err.message);
});
```

## Example

```
npm run example
```

## Test

```
npm run test
npm run test-cov
```

