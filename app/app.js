require('angular');
require('./locale/angular-locale_pt-br');

var MainController = require('./controllers/MainController');
var masktel = require('./directives/masktel');

angular.module('app', []);
angular.module('app').directive('maskTel', [masktel]);
angular.module('app').controller('MainController', ['$scope','$http', '$filter', MainController]);