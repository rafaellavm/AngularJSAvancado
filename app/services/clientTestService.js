module.exports = function($http){
   
   this.getClients = function(){

       return $http.get('http://localhost:8080/server/post.php');
   };

   this.saveClients = function(client){
        return $http.post('http://localhost:8080/server/post.php', client);
    }; 
};


