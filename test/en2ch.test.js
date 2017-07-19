var assert = require('assert');
var en2ch = require('../src/index');

describe('en2ch', function () {
    it('en2ch should throw an error when the input type is not String', () => {
        assert.throws(() => {
            en2ch(new Object())
        }, err => {
            if ( (err instanceof Error) && /Input Englist text string to try again/.test(err) ) {
                return true;
            }
        });
    });
    it('en2ch should not throw an error when the input type is String', () => {
        assert.doesNotThrow(() => {
            en2ch("hello world")
        }, "pass");
    });
    it('en2ch should back "你好世界" when input "hello world"', (done) => {
        en2ch("hello world").then(ret => {
            let str = ret;
            assert.equal(str, '你好世界');
            done();
        });
    });
    it('en2ch should not back "" when input "hello world"', (done) => {
        en2ch("hello world").then(ret => {
            let str = ret;
            assert.notEqual(str, '');
            done();
        });
    });
});