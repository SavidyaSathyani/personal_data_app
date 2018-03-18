(function (module) {
    'use strict';

    module.service('indexService', function ($http) {
        this.getPerson = function () {
            var results = $http.get('/person?_=' + Math.random())
                .then(function (response) {
                    return response.data;
                })
                .catch(function (exception) {
                    console.error(exception);
                });
            return results;
        };
    });
    
})(angular.module('personApp'));