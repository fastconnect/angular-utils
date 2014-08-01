'use strict';

function ConfirmPopupDirective(SomeService) {
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
  ]);
// .directive('confirm', confirmDirective);