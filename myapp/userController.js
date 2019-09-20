myApp.controller('userController', userController);
userController.$inject['$scope', '$filter'];

function userController($scope, $filter) {
      $scope.piatto = "";
      $scope.lung = "";
      $scope.filtro = "Pippo";

      $scope.conta = function () {
            var count = 0;
            for (var i = 0; i < $scope.piatto.length; i++) {
                  if ($scope.piatto.charAt(i) == ',')
                        count += 1;
            }
            if (count > 2) {
                  $scope.lung = "Hai scritto troppe preferenze!"
            }
            else {
                  $scope.lung = "ENJOY!"
            }

      }
      $scope.filtra = function () {
            $scope.filtro = $filter('uppercase')($scope.filtro);
      }

}

