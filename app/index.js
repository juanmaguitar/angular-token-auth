const angular = require('angular');

const UserCtrl = require('./user/controller');
const authInterceptor = require('./services/authInterceptor')

angular.module('myApp', [])
	.controller('UserCtrl', UserCtrl)
	.factory('authInterceptor', authInterceptor)
	.config( ($httpProvider) => {
	  $httpProvider.interceptors.push('authInterceptor');
	});