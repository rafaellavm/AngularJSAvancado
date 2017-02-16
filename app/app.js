require('angular');
require('angular-route');
require('./locale/angular-locale_pt-br');

var routeConfig = require('./config/routeConfig');
var configConstant = require('./config/configConstant');
var configValue = require('./config/configValue');
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
var bonusGenerator = require('./services/bonusGenerator');
var configBonusProvider = require('./config/configBonusProvider');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var masktel = require('./directives/masktel');
var alertMsg = require('./directives/alertMsg');

angular.module('app', ['ngRoute']);

angular.module('app').constant('configConstant',configConstant);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);
angular.module('app').config(['bonusGeneratorProvider','configConstant', configBonusProvider]);
angular.module('app').config(['$routeProvider', routeConfig]);
angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]);
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]);

angular.module('app').directive('maskTel', [masktel]);
angular.module('app').directive('alertMsg', [alertMsg]);

angular.module('app').controller('MainController', ['$scope','$http', '$filter', 'clientAPIService','clientTestService','configValue','bonusGenerator','routeName', MainController]);

=======
var configBonusProvider = require('./config/configBonusProvider');
var bonusGenerator = require('./services/bonusGenerator');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');
var alertMsg = require('./directives/alertMsg');

angular.module('app',['ngRoute']);
angular.module('app').constant('configConstant',configValue);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);

angular.module('app').config(['bonusGeneratorProvider','configConstant',configBonusProvider]);
angular.module('app').config(['$routeProvider',routeConfig]);

angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]);
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]);
angular.module('app').directive('maskTel',[maskTel]);
angular.module('app').directive('alertMsg',[alertMsg]);
angular.module('app').controller('MainController',['$scope','$http','$filter','clientAPIService','clientTestService','configValue','bonusGenerator','routeInfo',MainController]);
>>>>>>> Trabalhando com rotas 2
