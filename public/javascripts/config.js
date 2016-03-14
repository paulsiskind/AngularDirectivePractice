  app.config(function( $routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'YoyoController'
        })
      .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

       
      })