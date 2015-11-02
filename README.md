# jsvardump

Output javascript object like PHP(var_dump) using console.log.

### howtouse

```sh
$ npm install jsvardump
```

### example

```javascript
var jvd = require('jsvardump');

var object = {
	arr: [[1,11,111,{hoge:'aaa'}], 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
	obj: {
		'key': 'value',
		'date': Date.now()
	},
	str: 'some string'
};

jvd.dump(object);
```

```
arr
|   0
|   |   0:1
|   |   1:11
|   |   2:111
|   |   3
|   |   |   hoge:aaa
|   1:bbb
|   2:ccc
|   3:ddd
|   4:eee
|   5:fff
obj
|   key:value
|   date:1446430828339
str:some string
```