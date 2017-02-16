<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
//exportando pro browserify
module.exports = function ($scope, $http, $filter,clientAPIService, clientTestService, configValue, bonusGenerator, routeName) {
    
    $scope.name = $filter('uppercase')(configValue.appName);
    $scope.clients = [];
    $scope.tituloAlerta = "Alerta: ";
    $scope.mensagem_alerta = "";
    $scope.page = routeName;

    $scope.bonus = 'Cod.Bonus: ' + bonusGenerator.generator();
    //$scope.day = new Date();
    //$scope.total =  27.35;
=======
module.exports = function ($scope, $http, $filter, clientAPIService, clientTestService, configValue, bonusGenerator, routeInfo) {
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;

    $scope.bonus = 'Cod.Bonus: ' + bonusGenerator.generator();
>>>>>>> Trabalhando com rotas 2

    var listClients = function () {
        //clientAPIService.getClients()
        clientTestService.getClients()
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
         .then(function(success){
              //console.log(success.data);
              //console.log(success.status);
             $scope.clients  = success.data;
         }, function(error){
            //console.log(error);
        });     
    };
    var addClients = function (client) {
      //clientAPIService.saveClients(client)
      clientTestService.saveClients(client)
        .then(function(success){
             //console.log(success.data);
             //console.log(success.status);
             listClients();
            
        }, function(error){
            
        });  
        
    };
    
=======
            .then(function (success) {
                //console.log(success.data);
                //console.log(success.status);
                $scope.clients = success.data;
            }, function (error) {
                //console.log(error);
            });
    };
    var addClients = function (client) {
        //clientAPIService.saveClients(client)
        clientTestService.saveClients(client)
            .then(function (success) {
                //console.log(success.data);
                //console.log(success.status);
                listClients();

            }, function (error) {

            });

    };

>>>>>>> Trabalhando com rotas 2
    var destroyClients = function (client) {
        client.delete = true;
        //clientAPIService.saveClients(client)
        clientTestService.saveClients(client)
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
        .then(function(success){
             //console.log(success.data);
             //console.log(success.status);
        }, function(error){
            
        }); 
=======
            .then(function (success) {
                //console.log(success.data);
                //console.log(success.status);
            }, function (error) {

            });
>>>>>>> Trabalhando com rotas 2
    };

    listClients();

    $scope.add = function (client) {
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.mensagem_alerta = "Adicionado com sucesso!";

    };
    $scope.edit = function (client) {
        $scope.client = client;
        $scope.editing = true;
        $scope.mensagem_alerta = "";
    };
    $scope.save = function () {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.mensagem_alerta = "Salvo com sucesso!";
    };
    $scope.destroy = function (client) {
        //console.log($scope.clients);
        //console.log('index of cliente: ', $scope.clients.indexOf(client));
        $scope.clients.splice($scope.clients.indexOf(client), 1);
        destroyClients(client);
        $scope.mensagem_alerta = "Deletado com sucesso!";

    };
    $scope.orderBy = function (col) {
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
}
=======
};
>>>>>>> Trabalhando com rotas 2
