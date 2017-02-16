<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
module.exports = function($http, configValue){
   
   this.getClients = function(){

       //return $http.get('http://localhost:8080/server/post.php');
       return $http.get(configValue.apiURL);
   };

   this.saveClients = function(client){
        return $http.post(configValue.apiURL, client);
    }; 
};


=======
module.exports = function($http,configValue){
    this.getClients = function(){
       //return $http.get('http://localhost:8080/server/post.php');
       return $http.get(configValue.apiURL);
    };
    this.saveClients = function(client){
        return $http.post(configValue.apiURL,client);
    };

};
>>>>>>> Trabalhando com rotas 2
