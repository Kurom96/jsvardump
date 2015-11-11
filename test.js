var assert = require('assert'),
	jsvardump = require('./jsvardump');

// before(function (done) {
// 	console.log('[describe]before test')
// 	done();
// });
//
// after(function (done) {
// 	console.log('[describe]after test')
// 	done();
// });
//
// beforeEach(function (done) {
// 	console.log('[it]before every test');
// 	done();
// });
//
// afterEach(function (done) {
// 	console.log('[it]after every test')
// 	done();
// });

describe('#dump', function() {
	it('should does not throw exception in the dump(null)', function(){
		jsvardump.dump(null);
	});
	it('should does not throw exception in the dump(string)', function(){
		jsvardump.dump({hoge: 'some string'});
	});
	it('should does not throw exception in the dump(number:0)', function(){
		jsvardump.dump(0);
	});
	it('should does not throw exception in the dump(number:-1)', function(){
		jsvardump.dump(-1);
	});
	it('should does not throw exception in the dump(Array)', function(){
		jsvardump.dump([-1,0,1,2,3]);
	});
	it('should does not throw exception in the dump(boolean:true)', function(){
		jsvardump.dump(true);
	});
	it('should does not throw exception in the dump(boolean:false)', function(){
		jsvardump.dump(false);
	});
	it('should does not throw exception in the dump(nullArray)', function(){
		jsvardump.dump([]);
	});
	it('should does not throw exception in the dump(function)', function(){
		jsvardump.dump(function(){
			return 0;
		});
	});
	it('should does not throw exception in the dump(multiObject)', function(){
		jsvardump.dump({
			hoge: 'some string',
			array: [1],
			nest: {
				fuga: 'some string 2',
				array: ['some string 3'],
				bool: false
			},
			func: function() {
				return 0;
			}
		});
	});
});

