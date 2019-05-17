angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('client', {
            url: '/client',
            templateUrl: 'client.html'
        })
		.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard.html'
        })

       

});