(function () {
    'use strict';

    angular.module('yperevoznikov.ypcheckbox', [])

        .directive('ypcheckbox', function() {
            var link = function(scope, el, attrs, ngModelCtrl) {

                ngModelCtrl.$setViewValue(!!ngModelCtrl.$viewValue);

                var checkEl = angular.element(el.children()[0]);
                var checkElInner = angular.element(checkEl.children()[0]);
                var checkElLabel = angular.element(el.children()[1]);

                checkEl.css({
                    'border': '2px solid red',
                    'width': '8px',
                    'height': '8px',
                    'display': 'inline-block',
                    'borderRadius': '5px',
                    'padding': '2px',
                    'cursor': 'pointer',
                    'verticalAlign': 'middle',
                    'marginRight': '5px'
                });

                checkElInner.css({
                    'width': '100%',
                    'height': '100%',
                    'background': 'red',
                    'verticalAlign': 'middle',
                    'borderRadius': '5px',
                    'display': ngModelCtrl.$viewValue ? 'inline-block' : 'none'
                });

                checkElLabel.css({'verticalAlign': 'middle'});

                var onClick = function () {
                    ngModelCtrl.$setViewValue(!ngModelCtrl.$viewValue);
                    checkElInner.css('display', ngModelCtrl.$viewValue ? 'inline-block' : 'none');
                };
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
                    '<span class="ypcheckbox-check">' +
                        '<span class="ypcheckbox-check-inner"></span>' +
                    '</span>' +
                    '<span class="ypcheckbox-label"><ng-transclude></ng-transclude></span>'
            };
        })

})();