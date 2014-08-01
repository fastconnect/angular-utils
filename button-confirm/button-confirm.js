'use strict';

function ConfirmPopupDirective() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&',
    },
    templateUrl: 'button_confirm.html',
  };
}

// function confirmDirective(Someservice) {
//   var tt = $tooltip('confirm', 'confirm', 'click');
//   tt.controller = 'ConfirmCtrl';
//   return tt;
// }

angular.module('angular-utils-ui', ['ui.bootstrap'])
  .directive('confirmPopup', ConfirmPopupDirective)
  .directive('confirm', ['$tooltip',
    function($tooltip) {
      var tt = $tooltip('confirm', 'confirm', 'click');
      tt.controller = 'ConfirmCtrl';
      return tt;
    }
  ]).controller('ConfirmCtrl', ['$scope', '$attrs', '$parse',
    function($scope, $attrs, $parse) {

      var fn = $parse($attrs.confirmHandler);

      $scope.cancel = function() {
        $scope.tt_isOpen = false;
      };

      $scope.confirm = function() {
        console.log($attrs.confirmHandler)
        fn($scope);
        $scope.tt_isOpen = false;
      };
    }
  ]);
// .directive('confirm', confirmDirective);