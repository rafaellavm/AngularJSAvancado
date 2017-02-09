require('angular');
require('./locale/angular-locale_pt-br');

var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var masktel = require('./directives/masktel');
var alertMsg = require('./directives/alertMsg');

angular.module('app', []);
angular.module('app').factory('clientAPIService',['$http',clientAPIService]);
angular.module('app').service('clientTestService',['$http',clientTestService]);
angular.module('app').directive('maskTel', [masktel]);
angular.module('app').directive('alertMsg', [alertMsg]);
angular.module('app').controller('MainController', ['$scope','$http', '$filter', 'clientAPIService','clientTestService', MainController]);
