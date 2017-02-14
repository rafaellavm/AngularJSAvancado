require('angular');
require('./locale/angular-locale_pt-br');

var configConstant = require('./config/configConstant');
var configValue = require('./config/configValue');
var bonusGenerator = require('./services/bonusGenerator');
var configBonusProvider = require('./config/configBonusProvider');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var masktel = require('./directives/masktel');
var alertMsg = require('./directives/alertMsg');

angular.module('app', []);
angular.module('app').constant('configConstant',configConstant);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);
angular.module('app').config(['bonusGeneratorProvider','configConstant', configBonusProvider]);
angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]);
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]);
angular.module('app').directive('maskTel', [masktel]);
angular.module('app').directive('alertMsg', [alertMsg]);
angular.module('app').controller('MainController', ['$scope','$http', '$filter', 'clientAPIService','clientTestService','configValue','bonusGenerator', MainController]);

