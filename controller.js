angular.module('userProfiles').controller('MainController', function($scope, mainSvc){
	
	$scope.getUsersCtrl = function() {
		$scope.users = mainSvc.getUsersSvc();
	};

	$scope.getUsersCtrl();

	$scope.toggleFavoriteCtrl = mainSvc.toggleFavoriteSvc;
    		
})