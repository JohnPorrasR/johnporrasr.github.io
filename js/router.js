app.config(function($routeProvider){

	$routeProvider
			.when('/', {
                templateUrl : 'johnporrasr.html',
                controller  : 'mainController'
            })

            .when('/portafolio', {
                templateUrl : 'portafolio.html',
                controller  : 'mainController'
            })

            .when('/experiencia', {
                templateUrl : 'experiencia.html',
                controller  : 'portafolioController'
            });

});