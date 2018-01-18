'use strict';

(function() {
  this.app.component('instagram', {
    templateUrl: "js/components/settings/instagram/instagram.html",

    controller: function ($scope,$Settings) {

      // var previousInstagram = false;
      // $scope.isLoading =true;
      //
      //
      // $Settings.getInstagram().then(function(_response){
      //   $scope.instagram =_response.data;
      //
      //   if($scope.instagram != 0){
      //     previousInstagram = true;
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
      // function updateInstagram(data){
      //   $Settings.updateInstagram(data).then(function(_response){
      //     previousInstagram = true;
      //     Instagram.setInstagram(_response.data.instagram)
      //   },function(_error){
      //
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Instagram")
      //
      //   })
      // }
      //
      // function createInstagram(data){
      //   $Settings.createInstagram(data).then(function(_response){
      //     Instagram.setInstagram(_response.data.instagram)
      //   },function(_error){
      //     toastr.error("Error al guardar las credenciales, intentelo mas tarde","Instagram")
      //   })
      // }
      //
      // $scope.update = function (){
      //   previousInstagram ? updateInstagram(data) : createInstagram(data)
      // }

    }
  });
}).call(this);
