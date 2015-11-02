var dump = function(obj, indent) {
	indent = indent || 0;
	var sp = '', i;
	for (i = 0; i < indent; i++) {
		sp = sp + '|   ';
	}
	for (var key in obj) {
		var item = obj[key];
		if (isObject(item)) {
			console.log(sp + key);
			dump(item, indent + 1);
			continue;
		}
		console.log(sp + key + ':' + item);
	}
}
var isObject = function(item) {
	var type = typeof item;
	return type === 'function' || type === 'object' && !!item;
}
exports.dump = dump;
