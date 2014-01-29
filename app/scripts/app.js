'use strict';

angular.module('fireUser').value('FireUserConfig',{
    url:"https://fireuser.firebaseio.com/",
    iconCss:'fontawesome'
    });

angular.module('FireUserDemo', ['fireUser'])
  .controller('Main',function ($scope) {

    $scope.loginstatus = 'not logged in'

    $scope.$on('fireuser:login',function () {
      $scope.loginstatus = 'logged in'
    })

    $scope.$on('fireuser:logout',function () {
      $scope.loginstatus = 'not logged in'
    })
  })