angular.module('expense-client')

.controller('CategoriesController', function(CategoriesService) {

    this.categories = [];

    var self = this;

    CategoriesService.get(function(res) {
        self.categories = res;
    });
});