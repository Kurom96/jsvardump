var jvd = require('./jsvardump');
// var jvd = require('jsvardump');

var object = {
	arr: [[1,11,111,{hoge:'aaa', fuga:'bbb'}], 'ccc', 'ddd'],
	obj: {'key': 'value', 'date': Date.now(), 'func': function(){console.log(1);}},
	str: 'some string'
};

jvd.dump(object);