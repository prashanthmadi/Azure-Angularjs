 (function(){
	var app = angular.module("giveCampaign",['ngRoute']);

	app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {

		$routeProvider.when('/donarlist', {templateUrl:"assets/templates/donarlist.html",controller:'DonarController'}).when('/receivertrans',{templateUrl:"assets/templates/receiver.html",controller:'ReceiverController'}).otherwise({redirectTo: '/abc'});
		$locationProvider.hashPrefix('!').html5Mode(true);
	}]);



	app.controller('DonarController', function(){
		this.recentTrans = recentTransactions;
		
	});

	var recentTransactions =[
		{donatedTo:"justin Tim",
		item:"bicycle",
		cost:"300",
		donatedBy:"Cristhian Uribe"
		},
		{donatedTo:"bryan lynch",
		item:"baseball bat",
		cost:"200",
		donatedBy:"richard marr"
		}
	];

	app.controller('ReceiverController',function(){
		
	});

 })();


