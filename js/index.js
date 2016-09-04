import angular from 'angular';

// GLOBAL CSS & BOOTSTRAP STYLES
require('../css/bootstrap/fonts/glyphicons-halflings-regular.eot');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.svg');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.woff');
require('../css/bootstrap/fonts/glyphicons-halflings-regular.woff2');
require('../css/bootstrap/dist/css/bootstrap.css');
require('../css/main.css');
require('angular-animate');
require('angular-ui-bootstrap');
require('angular-material-icons');

var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate', 'ngMdIcons']);

require('./content')(app);
