/**
 * @file baidu fanyi translator
 * @author X-Jray(z.xuanjian@gmail.com)
 */

const http = require('http');
const querystring = require('querystring');

const conf = require('./conf');

function requestAPI(query) {

    let postStringData = querystring.stringify({
        from: conf.from,
        to: conf.to,
        query
    });

    return new Promise((resolve, reject) => {
        let requset = http.request({
            host: conf.host,
            port: conf.port,
            path: conf.path,
            method: conf.method,
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
