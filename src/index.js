/**
 * @file baidu fanyi translator
 * @author X-Jray(z.xuanjian@gmail.com)
 */

const http = require('http');
const querystring = require('querystring');

function requestAPI(query) {

    let postStringData = querystring.stringify({
        from: 'en',
        to: 'zh',
        query
    });

    return new Promise((resolve, reject) => {
        let requset = http.request({
            host: 'fanyi.baidu.com',
            port: 80,
            path: '/v2transapi',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postStringData.length
            }
        }, res => {
            res.setEncoding('utf8');
            let received = '';

            res.on('data', data => {
                received += data;
            });

            res.on('end', () => {
                try {
                    let retData = JSON.parse(received);
                    resolve(retData.trans_result.data[0].dst);
                }
                catch (err) {
                    reject(err);
                }
            });
        });

        requset.on('error', err => {
            reject(err);
        });

        requset.end(postStringData);

    });
}

module.exports = function (enText) {

    if ('[object String]' !== Object.prototype.toString.call(enText)) {
        throw new Error('Input Englist text string to try again');
    }

    return requestAPI(enText);
};

