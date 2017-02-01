//exportando pro browserify
module.exports = function ($scope, $http, $filter) {
    
    $scope.name = $filter('uppercase')('Cadastro em Angular');
    $scope.clients = [];
    $scope.day = new Date();
    $scope.total =  27.35;

    var listClients = function () {
         $http.get('http://localhost:8080/server/post.php')
         .then(function(success){
              //console.log(success.data);
              //console.log(success.status);
             $scope.clients  = success.data;
         }, function(error){
            //console.log(error);
        });     
    };
    var addClients = function (client) {
      $http.post('http://localhost:8080/server/post.php', client)
        .then(function(success){
             //console.log(success.data);
             //console.log(success.status);
             listClients();
            
        }, function(error){
            
        });  
        
    };
    
    var destroyClients = function (client) {
        client.delete = true;
        $http.post('http://localhost:8080/server/post.php', client)
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

    };
    $scope.edit = function (client) {
        $scope.client = client;
        $scope.editing = true;
    };
    $scope.save = function () {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
    };
    $scope.destroy = function (client) {
        //console.log($scope.clients);
        //console.log('index of cliente: ', $scope.clients.indexOf(client));
        $scope.clients.splice($scope.clients.indexOf(client), 1);
        destroyClients(client);

    };
    $scope.orderBy = function (col) {
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
}