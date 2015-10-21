/*
 * @Author: Administrator
 * @Date:   2015-10-17 12:35:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2015-10-17 12:35:49
 */

'use strict';

angular.module('namer', [])
    .directive('namer', function() {
        return {
            restrict: 'C',
            link: function($scope, $elem, $attr) {
                $scope.fullName = $attr.first + ' ' + $attr.last;
                $scope.first = $attr.first;
                $scope.last = $attr.last;
            },
            scope: {},
            // replace: true,
            template: '{{ last }}, {{ first }}'
        }
    })
