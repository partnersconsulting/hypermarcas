angular.module('App.directives', [])
    .directive('panel', function() {
        var ddo = {}; //sempre retorna

        ddo.restrict = 'E'; //Atribute or element

        ddo.scope = {
            title: '@title',
            linkback: '@linkback',
            type: '@type'
        }

        ddo.transclude = true;

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/panel.html' + r;
        return ddo;
    })
    /*    .directive('field', function($compile) {
            var ddo = {}; //sempre retorna

            ddo.restrict = 'E'; //Atribute or element

           // ddo.replace = true;

            ddo.scope = {
                title: '@title',
                type: '@type',
                size: '@size',
                ngModel: '='
            }



            ddo.templateUrl = 'view/directives/field.html';
            return ddo;
        })*/
    .directive('entry', function() {
        var ddo = {};



        ddo.restrict = 'E';
        ddo.scope = {
            title: '@title',
            size: '@size',
            type: '@type',

            onlyview: '=',
            list: '=',
            model: '='
        }

        ddo.controller = function($scope, $attrs) {
            //console.log("onlyview: " + $scope.model);

            if (!$scope.size) {
                $scope.size = 2;
            }
            if (!$scope.name) {
                $scope.name = $attrs.model;
            }
        }




        ddo.compile = function(element, attrs) {
            element.attr('class', "col-md-" + attrs.size);
        }

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/entry.html' + r;
        return ddo;
    })
    /*.directive('showentry', function() {
        var ddo = {};


        ddo.restrict = 'E';
        ddo.scope = {
            title: '@title',
            size: '@size',
            type: '@type',
            value: '@value'
        }

        ddo.controller = function($scope, $attrs) {
            if (!$scope.size) {
                $scope.size = 2;
            }
     
        }

        ddo.compile = function(element, attrs) {
            element.attr('class', "col-md-" + attrs.size);
        }

        ddo.templateUrl = 'view/directives/showentry.html';
        return ddo;
    })*/
