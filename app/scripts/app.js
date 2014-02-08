'use strict';

angular.module('fireUser').value('FireUserConfig',{
    url:"https://fireuser.firebaseio.com/",
    datalocation:"FireUser",
    userdata:"data",
    iconCss:'fontawesome'
    });

angular.module('FireUserDemo', ['fireUser'])
  .controller('Main',function ($scope, $rootScope) {
    $rootScope.loginstate = false;
    $scope.loginstatus = 'not logged in'

    $scope.$on('fireuser:login',function (evt,user) {

      $scope.loginstatus = 'user '+user.username+' logged in'
      $rootScope.loginstate = true;
    })

    $scope.$on('fireuser:logout',function () {
      $scope.loginstatus = 'not logged in'
      $rootScope.loginstate = false;

    })
  })