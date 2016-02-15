/**
 * Created by ronnyr on 14/02/2016.
 */
angular
    .module('projectsApp')
    .controller('mainController', function ($scope) {
        $scope.bookmarks = [
            {
                'id': 1,
                'title': 'bookmark1',
                'creationDate': '1455275400'
            },
            {
                'id': 2,
                'title': 'bookmark2',
                'creationDate': '1455102600'
            },
            {
                'id': 3,
                'title': 'bookmark3',
                'creationDate': '1452424200'
            }
        ];

        $scope.addBookmark = function () {
            $scope.bookmarks.push(
                {
                    'id': 4,
                    'title': 'bookmark4',
                    'creationDate': '1455202600'
                }
            );
        };

        $scope.removeBookmark = function (index) {
            $scope.bookmarks.splice(index,1);
        };
    });
