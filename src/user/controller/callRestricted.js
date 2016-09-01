function callRestricted( $scope, $http ) {

  const url = '/api/restricted';
  const method = 'GET';

  $http( { url, method } )
    .success( (data /*, status, headers, config*/) => {
      console.log(data);
      $scope.message = `Did you know that: ${data.msg}`;
    })
    .error( (data /*, status, headers, config*/) => {
      alert(data);
    });
}

module.exports = callRestricted;
