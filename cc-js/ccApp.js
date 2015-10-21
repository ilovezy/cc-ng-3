/*
 * @Author: Administrator
 * @Date:   2015-10-17 02:54:34
 * @Last Modified by:   Administrator
 * @Last Modified time: 2015-10-17 23:41:34
 */

'use strict';

var ccApp = angular.module('ccApp', ['ngAnimate', 'ui.router']);

ccApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'cc-template/home.html',
                controller: 'girlCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'cc-template/about.html'
            })
    })
    .controller('girlCtrl', ['$scope', function($scope) {
        $scope.list = [{
            'name': 'CC',
            'age': 22
        }, {
            'name': 'zy',
            'age': 22
        }, {
            'name': 'qq',
            'age': 21
        }, {
            'name': 'mh',
            'age': 25
        }, ];

        $scope.addGirl = function() {
            $scope.list.push({
                name: $scope.name,
                age: $scope.age
            })
            $scope.name = ''
            $scope.age = ''
        }
    }])
    .directive('helloCc', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            template: 'Hello CC',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {

            }
        };
    });
