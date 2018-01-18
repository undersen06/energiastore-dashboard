'use strict';

(function() {
  this.app.component('facebook', {
    templateUrl: "js/components/settings/facebook/facebook.html",

    controller: function ($scope,$Settings) {
      //
      // var previousFacebook = false;
      // $scope.isLoading =true;
      //
      //
      // $Settings.getFacebook().then(function(_response){
      //   $scope.facebook =_response.data;
      //
      //   if($scope.facebook != 0){
      //     previousFacebook = true;
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
      // function updateFacebook(data){
      //   $Settings.updateFacebook(data).then(function(_response){
      //     previousFacebook = true;
      //     Facebook.setFacebook(_response.data.facebook)
      //   },function(_error){
      //
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Facebook")
      //
      //   })
      // }
      //
      // function createFacebook(data){
      //   $Settings.createFacebook(data).then(function(_response){
      //     Facebook.setFacebook(_response.data.facebook)
      //   },function(_error){
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Facebook")
      //   })
      // }
      //
      // $scope.update = function (){
      //   previousFacebook ? updateFacebook(data) : createFacebook(data)
      // }

    }
  });
}).call(this);
