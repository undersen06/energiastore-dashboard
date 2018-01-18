'use strict';

(function() {
  this.app.component('navbar', {
     templateUrl: "js/components/navbar/navbar.html",

      controller: function ($scope,AuthModel) {

        $scope.logout = function(){

          AuthModel.destroyAdmin();
          $window.location.href = '#/login';

        }
      }
  });
}).call(this);
