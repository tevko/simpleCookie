/* simpleCookie.js
*
* A small javascript utility to make handling cookies simple
*
* Author: Tim Evko
* https://twitter.com/tevko
* https://timevko.website
* https://github.com/tevko/simpleCookie
* License: MIT
*
*/

;(function() {
	'use strict';
	window._smplCke = {
        /**
         * returns true if a cookie exists
         * @param  {string}  name - the name of the cookie
         * @return {Boolean} - returns true if the cookie exists
         */
        is: function(name) {
            return document.cookie.indexOf(name + '=') > -1;
        },
        /**
         * returns the value of a cookie as an object
         * @param  {string} name - the name of the cookie to be returned
         * @return {object} - a JS object representation of the cookie
         */
        get: function(name) {
            var jsonString = decodeURIComponent(document.cookie.split(name + '=')[1].split(';')[0]);
            return JSON.parse(jsonString);
        },
        /**
         * sets a cookie
         * @param {string} name - the name of the cookie
         * @param {string | object} value - the body of the cookie
         * @param OPTIONAL {date string} expiration - a valid UTC date string "Thu, 18 Dec 2013 12:00:00 UTC" DEFAULT - Session
         * @param OPTIONAL {string} path - a URL path where the cookie should exist DEFAULT - '/'
         */
        set: function(name, value, expiration, path) {
            if (typeof path === 'undefined') {
                path = '/';
            }
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            if (typeof expiration === 'undefined') {
                document.cookie = name + '=' + value + '; path=' + path;
            } else {
                document.cookie = name + '=' + value + ';expires=' + expiration + '; path=' + path;
            }
        },
        /**
         * deletes a cookie
         * @param  {string} name - the name of the cookie
         */
        del: function(name) {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
})();