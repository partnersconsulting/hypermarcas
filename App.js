angular.module('App', ["App.controllers", "App.services", "App.directives", "App.filters", 'ngAnimate', "ngRoute", "ngResource", 'ui.bootstrap'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeController'
            })
            .when('/voluntarios', {
                templateUrl: 'view/voluntarios.html',
                controller: 'VoluntariosController'
            })
            .when('/cadastro_voluntario', {
                templateUrl: 'view/cadastro_voluntario.html',
                controller: 'VoluntariosController'
            })
            .when('/pesquisas', {
                templateUrl: 'view/pesquisas.html',
                controller: 'PesquisasController'
            })
            .when('/cadastro_pesquisa', {
                templateUrl: 'view/cadastro_pesquisa.html',
                controller: 'PesquisasController'
            })
            

            .otherwise({ redirectTo: 'home' });

    });
