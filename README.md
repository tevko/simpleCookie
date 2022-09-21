# simpleCookie [![buld status](https://travis-ci.org/tevko/simpleCookie.svg)](https://travis-ci.org/tevko/simpleCookie) [![Rate on Openbase](https://badges.openbase.com/js/rating/simplecookie.svg)](https://openbase.com/js/simplecookie?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![kandi X-Ray](https://kandi.openweaver.com/badges/xray.svg)](https://kandi.openweaver.com/javascript/tevko/simpleCookie)
A small utility to make handling cookies simple
-----------------------------------------------

307 bytes minified & gzipped

## Useage

**After minifying/uglifying simpleCookie.js**

### Setting a cookie

`_smplCke.set('test', {'foo' : 'bar', 1 : true}, 'Thu, 18 Dec 2019 12:00:00 UTC', '/login');`

Parameters one and two are mandatory, three and four are optional, and default to `session` and `/` respectively. The value of a cookie can be a string or an object.

### Getting a cookie

`_smplCke.get('test')`

If the value of the cookie is an object, an object will be returned. Otherwise, this will return a string.

### Deleting a cookie

`_smplCke.del('test')`

### Finding a cookie

`_smplCke.is('test')`

Will return `true` or `false`

## Contributing

This library is meant to provide a minimal API, which can be extended upon by the user if needed. With that in mind, please do not submit pull requests containing additional features, unless they allow for necessary functionality which is not currently provided.
