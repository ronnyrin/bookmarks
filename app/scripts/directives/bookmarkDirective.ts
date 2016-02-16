/**
 * Created by ronnyr on 15/02/2016.
 */


angular
    .module('projectsApp')
    .directive('bookmark', function () {
        return {
            restrict: 'E',
            scope: {
                bookmark: '=',
                onBookmarkRemove: '&'
            },
            templateUrl: 'views/bookmark.html'
        };
    });
