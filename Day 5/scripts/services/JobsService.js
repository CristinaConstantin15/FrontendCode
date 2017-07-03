/**
 * Created by Cristina.Constantin on 7/3/2017.
 */
hrApp.service('JobsService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        }
    }]
);
