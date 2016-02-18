/**
 * Created by ronnyr on 14/02/2016.
 */

class BookmarksListControllers {

    predicate:string;
    reverse:boolean;
    loading:boolean;
    bookmarks:IBookmark[];

    constructor(private bookmarksService:BookmarksService,
                private $uibModal) {
        this.predicate = 'creationDate';
        this.reverse = true;
        this.loading = true;

        this.bookmarksService.loadBookmarks().then(response => {
            this.bookmarks = response;
            this.loading = false;
        });

    }

    addBookmark() {
        var bookmark:IBookmark = this.bookmarksService.create('some title');
        this.bookmarksService.add(bookmark);
    }

    removeBookmark(bookmark) {
        this.bookmarksService.remove(bookmark);
    }

    editBookmark(bookmark) {
        var modalInstance = this.$uibModal.open({
            templateUrl: 'scripts/components/bookmark-edit/bookmark-edit.html',
            controller: 'bookmarkEditModal',
            controllerAs: 'bookmarkEditCtrl',
            resolve: {
                bookmark: bookmark
            }
        });

        return modalInstance.result.then(response => {
            this.bookmarksService.edit(response);
        });
    }
}

angular
    .module('projectsApp')
    .controller('bookmarksListControllers', BookmarksListControllers)
    .component('bookmarksList', {
        controller: 'bookmarksListControllers',
        templateUrl: 'scripts/components/bookmarks-list/bookmarks-list.html',
    });

