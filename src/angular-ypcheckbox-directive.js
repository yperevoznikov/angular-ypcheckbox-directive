(function () {
    'use strict';

    angular.module('yperevoznikov.ypcheckbox', [])

        .directive('ypcheckbox', function() {
            var link = function(scope, el, attrs, ngModelCtrl) {

                ngModelCtrl.$setViewValue(!!ngModelCtrl.$viewValue);

                var checkEl = angular.element(el.children()[0]);
                var checkElLabel = angular.element(el.children()[1]);

                el.addClass('ypcheckbox');

                var onClick = function () {
                    ngModelCtrl.$setViewValue(!ngModelCtrl.$viewValue);
                    if (ngModelCtrl.$viewValue) {
                        el.addClass('ypcheckbox_checked');
                    } else {
                        el.removeClass('ypcheckbox_checked');
                    }
                };
                el.bind('click', onClick());
                checkEl.bind('click', onClick);
                checkElLabel.bind('click', onClick);

            };

            var compile = function(tElement, tAttrs, transclude) {
                return link;
            };

            return {
                restrict: 'A',
                require: 'ngModel',
                transclude: true,
                compile: compile,
                template:
                    '<span class="ypcheckbox__check">' +
                        '<span class="ypcheckbox__mark"></span>' +
                    '</span>' +
                    '<span class="ypcheckbox__label"><ng-transclude></ng-transclude></span>'
            };
        })

})();