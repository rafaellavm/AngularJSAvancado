//exportando pro browserify
module.exports = function ($scope, $http, $filter,clientAPIService) {
    
    $scope.name = $filter('uppercase')('Cadastro em Angular');
    $scope.clients = [];
    $scope.tituloAlerta = "Alerta: ";
    $scope.mensagem_alerta = "";
    //$scope.day = new Date();
    //$scope.total =  27.35;

    var listClients = function () {
        clientAPIService.getClients()
         .then(function(success){
              //console.log(success.data);
              //console.log(success.status);
             $scope.clients  = success.data;
         }, function(error){
            //console.log(error);
        });     
    };
    var addClients = function (client) {
      clientAPIService.saveClients(client)
        .then(function(success){
             //console.log(success.data);
             //console.log(success.status);
             listClients();
            
        }, function(error){
            
        });  
        
    };
    
    var destroyClients = function (client) {
        client.delete = true;
        clientAPIService.saveClients(client)
        .then(function(success){
             //console.log(success.data);
             //console.log(success.status);
        }, function(error){
            
        }); 
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
}