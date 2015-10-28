var _ = require('underscore');

var dump = function(obj, indent) {
	indent = indent || 0;
	var sp = '', i;
	for (i = 0; i < indent; i++) {
		sp = sp + '|   ';
	}
	_.each(obj, function(item, key){
		if (_.isObject(item)) {
			console.log(sp + key);
			dump(item, indent + 1);
			return;
		}
		console.log(sp + key + ':' + item);
	});
}

exports.dump = dump;
