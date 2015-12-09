(function () {
    'use strict';

    angular.module('yperevoznikov.ypcheckbox', [])

        .directive('ypcheckbox', function() {
            var link = function(scope, el, attrs, ngModelCtrl) {
;
                ngModelCtrl.$setViewValue(!!ngModelCtrl.$viewValue);

                var checkEl = angular.element(el.children()[0]);
                var checkElLabel = angular.element(el.children()[1]);

                el.addClass('ypcheckbox');

                var showValue = function() {
                    if (ngModelCtrl.$viewValue) {
                        el.addClass('ypcheckbox_checked');
                    } else {
                        el.removeClass('ypcheckbox_checked');
                    }
                };

                var onClick = function () {
                    ngModelCtrl.$setViewValue(!ngModelCtrl.$viewValue);
                    showValue();
                };
                checkEl.bind('click', onClick);
                checkElLabel.bind('click', onClick);

                scope.$watch("model", function() {
                    showValue();
                });
            };

            return {
                restrict: 'A',
                require: 'ngModel',
                transclude: true,
                link: link,
                scope: {
                    model: '=ngModel'
                },
                template:
                    '<span class="ypcheckbox__check">' +
                        '<span class="ypcheckbox__mark"></span>' +
                    '</span>' +
                    '<span class="ypcheckbox__label"><ng-transclude></ng-transclude></span>'
            };
        })

})();