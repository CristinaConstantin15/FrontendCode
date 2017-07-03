/**
 * Created by Theodor.Toma on 6/30/2017.
 */

hrApp.controller('FormController', ['$scope', function($scope){
    "use strict";
    $scope.submit = function() {
        if ( $scope.myForm.$valid === true)
            alert("Submited");
    };
}
]);