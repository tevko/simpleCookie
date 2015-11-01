
describe('CRUDCookie', function() {
	_smplCke.set('test', {'foo' : 'bar', 1 : true});
	console.log(document.cookie);
    it('Should exist', function() {
        expect(_smplCke.is('test')).toBe(true);
        expect(typeof _smplCke.get('test')).toBe('object');
    });
    _smplCke.del('test');
    it('Should not exist', function() {
        expect(typeof _smplCke.is('test')).toBe(false);
    });
});