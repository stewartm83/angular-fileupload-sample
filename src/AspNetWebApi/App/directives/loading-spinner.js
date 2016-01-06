;
(function(window) {

  "use strict";

  var angular = window.angular;

  // module
  angular.module("loading-spinner", [
    // Angular modules
    "ngAnimate"

    // Custom modules

    // 3rd Party Modules
  ]);

  // directive
  angular
    .module("loading-spinner")
    .directive("loadingSpinner", overlaySpinner);

  overlaySpinner.$inject = ["$animate"];

  function overlaySpinner($animate) {
    return {
      templateUrl: "/App/directives/loading-spinner.html",
      scope: { active: "=" },
      transclude: true,
      restrict: "E",
      link: link
    };

    function link(scope, element) {

      scope.$watch("active", statusWatcher);

      function statusWatcher(active) {
        $animate[active ? "addClass" : "removeClass"](element, "loading-spinner-active");
      }
    }
  }

}.call(this, window));