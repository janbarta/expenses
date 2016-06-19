angular.module('expense-client')

.factory('CategoriesService', ['$resource', function($resource) {
    return $resource('/api/categories/:id', null,
        {
            'update': { method:'PUT' },
            'get': {method: 'GET', isArray: true}
        });
}]);