en2ch
===

Use baidu fanyi api, archieve English to Chinese translate. 

## Prepare

```
    npm i en2ch --save
```

## Use


```
    const en2ch = require('en2ch');
    en2ch('hello world').then(ret => {
        console.log(ret);
    }).catch(err => {
        console.log(err.message);
    });
```

## Example

```
    npm test
```

