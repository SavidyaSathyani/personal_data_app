angular.module('personApp', [])
    .constant("REFRESH_TIME", 20000)
    .controller('rootController', function ($scope, indexService, $interval, REFRESH_TIME) {
        var interval;

        $scope.init = function () {
            //divide by 1000 to get the time in seconds
            $scope.remainingTime = REFRESH_TIME/1000;
            loadRandomData();
        };

        $scope.init();

        //get profile information from the server
        function loadRandomData() {
            indexService.getPerson().then(function (info) {
                $scope.person = info;
                console.log($scope.person);
            }).catch(function (exception) {
                console.error(exception);
            });
        };

        $scope.intervalFunction = function () {
            interval = $interval(function () {
                loadRandomData();
            }, REFRESH_TIME)
        };

        $scope.intervalFunction();

        //for the timer
        $interval(function () {
            $scope.remainingTime = $scope.remainingTime - 1;
            if ($scope.remainingTime == 0) {
                $scope.remainingTime = REFRESH_TIME/1000;
            }
        }, 1000);

        $scope.refresh = function () {
            loadRandomData();
            $scope.remainingTime = REFRESH_TIME/1000;

            if (angular.isDefined(interval)) {
                $interval.cancel(interval);
                interval = undefined;
                $scope.intervalFunction();
            }

        };

    });