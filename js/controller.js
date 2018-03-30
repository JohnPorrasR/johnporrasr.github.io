app.controller('mainController', function($scope, $http){

	$http.get('json/datos.json').
		success(function(response){
			$scope.datos = response;
			console.log(response);
		}).
		error(function(response){

		});

	$scope.msg = "Para poder realizar la presentación he utilizado lo siguiente:";

});

app.controller('johnporrasrController', function($scope){

	$scope.menssage = "Hola mundo del controller johnporrasr";

});

app.controller('portafolioController', function($scope){

	$scope.menssage = "Hola mundo del controller portafolioController";

});