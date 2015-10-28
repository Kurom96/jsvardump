var jd = require('./jsdump');

var object = {
	arr: [[1,11,111,{hoge:'aaa'}], 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
	obj: {
		'key': 'value',
		'date': Date.now()
	},
	str: 'some string'
};
jd.dump(object);
