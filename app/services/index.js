const authInterceptor = require('./authInterceptor')

angular.module('myAppServices', [])
	.factory('authInterceptor', authInterceptor)

module.exports = 'myAppServices';