/**
 * Created by ronnyr on 15/02/2016.
 */


angular.module('projectsApp').component('bookmark', {
    templateUrl: 'scripts/components/bookmark/bookmark.html',
    bindings: {
        bookmark: '=',
        onBookmarkRemove: '&'
    }
});
