const submit = require('./submit.js');
const logout = require('./logout.js');
const callRestricted = require('./callRestricted.js');

function UserCtrl($scope, $http, $window) {

  $scope.user = { username: 'john.doe', password: 'foobar' };
  $scope.isAuthenticated = false;
  $scope.welcome = '';
  $scope.message = '';

  $scope.submit = submit.bind(null, $scope, $window, $http);
  $scope.logout = logout.bind(null, $scope, $window);
  $scope.callRestricted = callRestricted.bind(null, $scope, $http);

}

UserCtrl.$inject = ['$scope', '$http', '$window']

module.exports = UserCtrl;