angular.module("app")
    .controller("exam19Controller", function($scope) {
        $scope.imageName = "photo1.jpg";

        $scope.handleBtnClick = (event) => {
            if($scope.imageName === "photo1.jpg") {
                $scope.imageName = "photo2.jpg";
            } else {
                $scope.imageName = "photo1.jpg";
            }
        };
    });