angular.module('expense-client', ['ui.router'])


    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/home.tpl.html",
                controller: 'HomeController',
                controllerAs: 'h'
            })
            .state('categories', {
                url: '/categories',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('categories.list', {
                url: "/list",
                templateUrl: 'src/categories/categories.tpl.html',
                controller: 'CategoriesController',
                controllerAs: 'c'
            });
    });