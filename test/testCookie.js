
describe('CRUDCookie', function() {

    it('Should exist', function() {
		_smplCke.set('test', {'foo' : 'bar', 1 : true});
		expect(_smplCke.is('test')).toBe(true);
		expect(typeof _smplCke.get('test')).toBe('object');
		_smplCke.del('test');
		expect(typeof _smplCke.is('test')).toBe(false);
    });
});