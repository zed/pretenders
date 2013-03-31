'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('pretenders.services', ['ngResource'])
    .value('version', '0.1')
    .factory('Mock', function ($resource) {
        var Mock = $resource(
            '/:protocol/:mock_id',
            {},
            {
                // all: {
                //     method: 'GET',
                //     params: {protocol: '@protocol'},
                //     isArray: true
                // },
                // get: { method: 'GET' }
                //     params: {mock_id: '@uid',
                //              protocol: '@protocol'}
                // }
            });

        Mock.prototype.get_history = function() {

        };

        Mock.prototype.get_presets = function() {

        };

        Mock.prototype.keep_alive = function() {

        };

        return Mock;
    });



angular.module('history', ['ngResource']).factory('History', function($resource, Mock){

});

angular.module('preset', ['ngResource']).factory('Preset', function($resource, Mock){

});