angular.module("FlightSearchApp")

//=========================================================================
//Configuring DirectiveApp
//=========================================================================
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		
	   /**
	   * Routes definition for navigation
	   */
      $stateProvider
      .state('flightSearch', {
        url : '/flightSearch',
        templateUrl: 'app/components/flightInfo/flightSerach.view.html',
        controller: 'FlightSearchController as FSCtrl',
        authenticate: false,
        data : {'headerName' : 'Directive', 'pageName' : 'Flight Engine'}
        });
        
     $urlRouterProvider.otherwise('/flightSearch');
}]);