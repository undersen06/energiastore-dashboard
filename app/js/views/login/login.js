'use strict';

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function () {
	this.app.controller('LoginController', ['$scope', '$document', '$Auth', 'AuthModel', '$window','$log',
		function ($scope, $document, $Auth, AuthModel, $window, $log) {



			$scope.login = function (user) {
				$Auth.sign_in(user.email, user.password).then(function (_response) {
					AuthModel.setAdmin(_response.data);
					$window.location.href = '#/dashboard';
				}, function (_error) {
					$log.error(_error);

				});

			};





		}
	]);
}).call(this);