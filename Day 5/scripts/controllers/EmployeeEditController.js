hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'ManagerService', 'DepartmentService', 'JobsService', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, ManagerService, DepartmentService, JobsService, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        ManagerService.findManagers().then(function(resolve) {
            $scope.managers = resolve.data;
        });

        DepartmentService.findDepartments().then(function(resolve) {
            $scope.departments = resolve.data;
        });

        JobsService.findJobs().then(function(resolve) {
            $scope.jobs = resolve.data;
        });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.create = function () {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: $scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    //$scope.employee = EmployeeService.findById(employeeId);
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };




        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);