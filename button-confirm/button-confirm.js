'use strict';

angular.module('angular-utils-ui', ['ui.bootstrap'])
  .directive('confirmPopup', function confirmPopupDirective() {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        title: '@',
        content: '@',
        placement: '@',
        animation: '&',
        isOpen: '&'
      },
      template: htmlTooltipConfirm
    };
  }).directive('confirm', ['$tooltip',
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
        fn($scope);
        $scope.tt_isOpen = false;
      };
    }
  ]);

/* HTML tooltip */
var htmlTooltipConfirm = '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">' +
  '<div class="arrow"></div>' +
  '<div class="popover-inner">' +
  '<h3 class="popover-title" ng-bind="title" ng-show="title"></h3>' +
  '<div class="popover-content" ng-bind="content"></div>' +
  '<div class="popover-content">' +
  '<div class="row" style="width: 250px;">' +
  '<div class="col-xs-6">' +
  ng - click = "$event.stopPropagation();"
'<button class="btn-block btn btn-success" ng-click="$parent.confirm();$event.stopPropagation();">Yes</button>' +
  '</div>' +
  '<div class="col-xs-6">' +
  '<button class="btn-block btn btn-danger" ng-click="$parent.cancel();$event.stopPropagation();">No</button>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';