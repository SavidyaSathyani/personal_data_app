angular.module('personApp', [])
    .controller('rootController', function ($scope, indexService, $interval) {
        $scope.init = function () {
            $scope.remainingTime = 30;
            loadRandomData();
        };

        $scope.init();

        function loadRandomData() {
            indexService.getPerson().then(function (info) {
                $scope.person = info;
                console.log($scope.person);
            }).catch(function (exception) {
                console.error(exception);
            });
        };

        $scope.intervalFunction = function () {
            $interval(function () {
                loadRandomData();
            }, 30000)

            $interval(function () {
                $scope.remainingTime = $scope.remainingTime - 1;
                if ($scope.remainingTime == 0) {
                    //$interval.cancel($scope.timeInterval);
                    $scope.remainingTime = 30;
                }
            }, 1000);
        };

        $scope.intervalFunction();

        $scope.refresh = function () {
            loadRandomData();
            $scope.remainingTime = 30;
        };

    });