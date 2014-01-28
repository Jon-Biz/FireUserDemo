'use strict';

angular.module('fireUser').value('FireUserConfig',{
    url:"https://fireuser.firebaseio.com",
    iconCss:'fontawesome'
    });

angular.module('FireUserDemo', ['fireUser'])
  .controller('Main',function ($scope) {
    $scope.loginstatus = "not logged in"
  })