var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){

		// sending test data 
		$scope.test = 'Hello world!';

		// send multiple post
		$scope.posts = [
			'post 1', 
			'post 2', 
			'post 3', 
			'post 4'
		]; 

	}]);