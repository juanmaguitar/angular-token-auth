function callRestricted( $scope, $http ) {

  const url = '/api/restricted';
  const method = 'GET';

  $http( { url, method } )
    .success( (data /*, status, headers, config*/) => {
      $scope.message = `${$scope.message} ${data.name}`; // Should log 'foo'
    })
    .error( (data /*, status, headers, config*/) => {
      alert(data);
    });
}

module.exports = callRestricted;