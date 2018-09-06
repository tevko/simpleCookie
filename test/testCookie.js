
describe('CRUDCookie', function() {
    it('Should exist', function() {
			_smplCke.set('test', {'foo' : 'bar', 1 : true});
			expect(_smplCke.is('test')).toBe(true);
			expect(typeof _smplCke.get('test')).toBe('object');
			_smplCke.del('test');
			expect(_smplCke.is('test')).toBe(false);
			
			_smplCke.set('test3', 'a string');
			expect(_smplCke.is('test3')).toBe(true);
			expect(typeof _smplCke.get('test3')).toBe('string');
    });
});