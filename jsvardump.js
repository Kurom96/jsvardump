var dump = function(obj, indent) {

	if (!isObject(obj)) {
		console.log(obj);
		return;
	}

	if (!indent) {
		console.log(typeof obj);
		indent = indent || '';
	}

	var myindent,
		childindent,
		len = Object.keys(obj).length,
		index = 0,
		key,
		item;

	for (key in obj) {
		index++;
		item = obj[key];

		myindent = indent + '├─ ';
		childindent = indent + '│  ';
		if (index === len) {
			myindent = indent + '└─ ';
			childindent = indent + '   ';
		}

		if (isObject(item)) {
			console.log(myindent + key);
			dump(item, childindent);
			continue;
		}

		if (isFunction(item)) {
			item = typeof item;
		}
		console.log(myindent + key + ':' + item);
	}
};

var isObject = function(item) {
	var type = typeof item;
	return type === 'object' && !!item;
};

var isFunction = function(item) {
	var type = typeof item;
	return type === 'function';
};

exports.dump = dump;
