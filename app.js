var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){

		// sending test data 
		$scope.test = 'Hello world!';

		// send multiple post
		$scope.posts = [
			{title: 'post 1', upvote:5}, 
			{title: 'post 2', upvote:2}, 
			{title: 'post 3', upvote:15}, 
			{title: 'post 4', upvote:9}, 
			{title: 'post 4', upvote:4}, 
		]; 

		// add events handling 
		$scope.addPost = function(){

			// sanity checks // 
			if (!$scope.title || $scope.title === ''){ return; }

			$scope.posts.push({title: $scope.title, upvote: 0}); 
			$scope.title = ''; 
		}; 

	}]);