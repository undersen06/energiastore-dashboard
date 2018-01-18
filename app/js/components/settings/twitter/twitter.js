'use strict';

(function() {
  this.app.component('twtter', {
    templateUrl: "js/components/settings/twitter/twitter.html",

    controller: function ($scope,$Settings) {

      // var previoustwitter = false;
      // $scope.isLoading =true;
      //
      //
      // $Settings.getTwitter().then(function(_response){
      //   $scope.twitter =_response.data;
      //
      //   if($scope.twitter != 0){
      //     previousTwitter = true;
      //   }
      //   $scope.isLoading =false;
      // },function(_error){
      //
      //   $scope.isLoading =false;
      //
      // })
      //
      //
      //
      // function updateTwitter(data){
      //   $Settings.updateTwitter(data).then(function(_response){
      //     previousTwitter = true;
      //     Twitter.setTwitter(_response.data.twitter)
      //   },function(_error){
      //
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Twitter")
      //
      //   })
      // }
      //
      // function createTwitter(data){
      //   $Settings.createTwitter(data).then(function(_response){
      //     Twitter.setTwitter(_response.data.twitter)
      //   },function(_error){
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Twitter")
      //   })
      // }
      //
      // $scope.update = function (){
      //   previousTwitter ? updateTwitter(data) : createTwitter(data)
      // }

    }
  });
}).call(this);
