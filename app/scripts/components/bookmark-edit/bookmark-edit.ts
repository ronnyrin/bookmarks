/**
 * Created by ronnyr on 14/02/2016.
 */

class BookmarkEditModal {

    bookmark:IBookmark;

    constructor(private $uibModalInstance, private bookmark) {
        this.bookmark = angular.copy(bookmark);
    }

    ok() {
        this.$uibModalInstance.close(this.bookmark);
    };

    cancel() {
        this.$uibModalInstance.dismiss();
    }
}

angular
    .module('projectsApp')
    .controller('bookmarkEditModal', BookmarkEditModal);

