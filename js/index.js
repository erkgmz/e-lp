var angular = require('angular');

require('../css/bootstrap/fonts/glyphicons-halflings-regular.eot');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.svg');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.woff');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.woff2');
require('../css/bootstrap/dist/css/bootstrap.css');
require('../css/main.css');
require('angular-animate');
require('angular-ui-bootstrap');

var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate']);

// calls module as function and passes in angular module
// webpack default behavior looks for 'index' files in directories
require('./content')(app);
