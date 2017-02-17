module.exports = function($scope,$filter,clientAPIService,configValue,routeInfo,$routeParams){
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;


    var listClient = function () {
        //clientAPIService.getClients()
        clientAPIService.getClient($routeParams.id)
            .then(function (success) {
                console.log(success.data);
                //console.log(success.status);
                $scope.client = success.data;
            }, function (error) {
                //console.log(error);
            });
    };
    
    listClient();   
};