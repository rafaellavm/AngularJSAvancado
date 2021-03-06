module.exports = function ($scope, $http, $filter, clientAPIService, clientTestService, configValue, bonusGenerator, routeInfo) {
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;

    $scope.bonus = 'Cod.Bonus: ' + bonusGenerator.generator();

    var listClients = function () {
        //clientAPIService.getClients()
        clientTestService.getClients()
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

    var destroyClients = function (client) {
        client.delete = true;
        //clientAPIService.saveClients(client)
        clientTestService.saveClients(client)
            .then(function (success) {
                //console.log(success.data);
                //console.log(success.status);
            }, function (error) {

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
};