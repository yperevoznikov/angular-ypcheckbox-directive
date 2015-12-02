(function () {
    'use strict';

    angular.module('yperevoznikov.ypcheckbox', [])

        .directive('ypcheckbox', function() {
            function link(scope, el, attrs) {

            }
            return {
                restrict: 'A',
                require: 'ngModel',
                link: link
            };
        })

})();