'use strict';

(function() {
  this.app.component('oneSignal', {
    templateUrl: "js/components/settings/onesignal/onesignal.html",

    controller: function ($scope,$Settings) {

      var previousOneSignal = false;
      $scope.isLoading =true;


      $Settings.getOneSignal().then(function(_response){
        $scope.onesignal =_response.data;

        if($scope.onesignal != 0){
          previousOneSignal = true;
        }
        $scope.isLoading =false;
      },function(_error){

        $scope.isLoading =false;

      })



      function updateOneSignal(data){
        $Settings.updateOneSignal(data).then(function(_response){
          previousOneSignal = true;
          OneSignal.setOneSignal(_response.data.oneSignal)
        },function(_error){

          toastr.error("Error al guardar las credenciales, intentelo mas tarde","OneSignal")

        })
      }

      function createOneSignal(data){
        $Settings.createOneSignal(data).then(function(_response){
          OneSignal.setOneSignal(_response.data.oneSignal)
        },function(_error){
          toastr.error("Error al guardar las credenciales, intentelo mas tarde","OneSignal")
        })
      }

      $scope.update = function (){
        previousOneSignal ? updateOneSignal(data) : createOneSignal(data)
      }

    }
  });
}).call(this);
