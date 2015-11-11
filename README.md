jsvardump
====

[![Circle CI](https://circleci.com/gh/KazuhikoKuroda/jsvardump.svg?style=svg)](https://circleci.com/gh/KazuhikoKuroda/jsvardump)

Output javascript object like PHP(var_dump) using console.log.

### Install

```sh
$ npm install jsvardump
```

### Usage

```javascript
var jvd = require('jsvardump');

var object = {
	arr: [[1,11,111,{hoge:'aaa', fuga:'bbb'}], 'ccc', 'ddd'],
	obj: {'key': 'value', 'date': Date.now(), 'func': function(){console.log(1);}},
	str: 'some string'
};

jvd.dump(object);
```

**console output**
```
object
├─ arr
│  ├─ 0
│  │  ├─ 0:1
│  │  ├─ 1:11
│  │  ├─ 2:111
│  │  └─ 3
│  │     ├─ hoge:aaa
│  │     └─ fuga:bbb
│  ├─ 1:ccc
│  └─ 2:ddd
├─ obj
│  ├─ key:value
│  ├─ date:1446602447382
│  └─ func:function
└─ str:some string
```

### License

[MIT](https://github.com/KazuhikoKuroda/jsvardump/blob/master/LICENSE)
