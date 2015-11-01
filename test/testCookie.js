describe('libraryExists', function() {
    it('Should exist', function() {
        expect(typeof _smplCke).toBe('object');
    });
});

describe('setCookie', function() {
	_smplCke.set('test', {'foo' : 'bar', 1 : true});

    it('Should exist', function() {
        expect(_smplCke.is('test')).toBe(true);
    });
});

describe('getCookie', function() {
    it('Should return an object', function() {
        expect(typeof _smplCke.get('test')).toBe('object');
    });
});

describe('deleteCookie', function() {
	 _smplCke.del('test');
    it('Should not exist', function() {
        expect(typeof _smplCke.is('test')).toBe(false);
    });
});