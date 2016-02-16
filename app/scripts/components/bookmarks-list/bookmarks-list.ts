/**
 * Created by ronnyr on 14/02/2016.
 */

class BookmarksListControllers {

    predicate:string;
    reverse:boolean;

    constructor(private bookmarksService:BookmarksService) {
        this.predicate = 'creationDate';
        this.reverse = true;
    }

    addBookmark() {
        var bookmark:IBookmark = this.bookmarksService.create('some title');
        this.bookmarksService.add(bookmark);
    };

    removeBookmark(id:number) {
        this.bookmarksService.remove(id);
    }

    get bookmarks() {
        return this.bookmarksService.bookmarks;
    }
}

angular
    .module('projectsApp')
    .controller('bookmarksListControllers', BookmarksListControllers)
    .component('bookmarksList',{
        controller: 'bookmarksListControllers',
        templateUrl: 'scripts/components/bookmarks-list/bookmarks-list.html',
    });

