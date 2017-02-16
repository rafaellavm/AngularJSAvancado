module.exports = function($routeProvider){
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92

   $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller: 'MainController',
        resolve:{
            routeName:function(){
                return "Client list";
            }
        }
    });

console.log('entrou 2');
    

=======
    $routeProvider.when("/home",{
        templateUrl:"view/home.html",
        controller:"MainController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-default"};
            }
        }
    });
    $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller:"MainController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-inverse"};
            }
        }
    });
    $routeProvider.otherwise({redirectTo:"/home"});
>>>>>>> Trabalhando com rotas 2
};