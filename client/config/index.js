'use strict';

var angular = require('angular');
var RunnerController = require('./controllers/runner');
var ProviderController = require('./controllers/provider');
var JobController = require('./controllers/job');
var ConfigController = require('./controllers/config');
var BranchesController = require('./controllers/branches');
var CollaboratorsController = require('./controllers/collaborators');
var DeactivateController = require('./controllers/deactivate');
var HerokuController = require('./controllers/heroku');
var GithubController = require('./controllers/github');
var interpolate = require('./configs/interpolate');
var reactBranchesDirective = require('./directives/react_branches');

var app = angular.module('config', ['ui.bootstrap', 'ui.codemirror', 'alerts', 'moment'])
  .config(['$interpolateProvider', interpolate])
  .controller('Config', ['$scope', '$element', '$sce', ConfigController])
  .controller('RunnerController', ['$scope', '$element', RunnerController])
  .controller('ProviderController', ['$scope', ProviderController])
  .controller('JobController', ['$scope', '$element', JobController])
  .controller('BranchesCtrl', ['$scope', BranchesController])
  .controller('CollaboratorsCtrl', ['$scope', CollaboratorsController])
  .controller('DeactivateCtrl', ['$scope', DeactivateController])
  .controller('HerokuController', ['$scope', HerokuController])
  .controller('GithubCtrl', ['$scope', GithubController])
  .directive('reactBranches', reactBranchesDirective)

module.exports = app;
