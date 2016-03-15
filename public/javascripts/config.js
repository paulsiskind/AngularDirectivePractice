  app.config(function( $routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/yoyo.html',
        controller: 'YoyoController'
      })
      .when('/next', {
        templateUrl: 'partials/next.html',
        controller: 'NextController'
      })
      .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

       
  })