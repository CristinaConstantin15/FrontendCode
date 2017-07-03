/**
 * Created by Cristina.Constantin on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        var managers = [];
                        for(var i in data){
                            if(data[i].managerId !== null)
                                managers.push(data[i])
                        }
                        return managers;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        }
    }]
);

