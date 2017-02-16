<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
module.exports = function($http){
    var _getClients = function(){
        return $http.get('http://localhost:8080/server/post.php');
    };
    var _saveClients = function(client){
        return $http.post('http://localhost:8080/server/post.php', client);
=======
module.exports = function($http,configValue){
    var _getClients = function(){
        return $http.get(configValue.apiURL);
    };
    var _saveClients = function(client){
        return $http.post(configValue.apiURL,client);
>>>>>>> Trabalhando com rotas 2
    };

    return {
        getClients:_getClients,
        saveClients:_saveClients
    };
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
};


=======
};
>>>>>>> Trabalhando com rotas 2
