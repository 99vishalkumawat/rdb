var app = angular.module('myApp', ['ui.router', "ui.grid"]);
app.controller('myCtrl', ['$scope', function($scope){
	$scope.name = "vishal";
	$scope.users = [
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
];
}]);

