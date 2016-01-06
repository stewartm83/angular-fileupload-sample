"use strict";

/**
 * @ngdoc overview
 * @name webApiSample
 * @description
 * # webApiSample
 *
 * Main module of the application.
 */
angular
  .module("webApiSample", [

    // Angular modules
    "ngAnimate",
    "ngRoute",
    //'ngAria',
    //'ngCookies',
    //'ngMessages',
    //'ngResource',
    //'ngSanitize',
    //'ngTouch'

    // Custom modules
    "loading-spinner",

    // 3rd Party Modules
    "ngFileUpload"
  ])
  .config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when("/", {
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl",
        controllerAs: "home"
      })
      .otherwise({
        redirectTo: "/"
      });
    $locationProvider.html5Mode(true);

  })
  .constant("apiUrl", "api/files/");