/**
 * Created by ronnyr on 14/02/2016.
 */



class MainController {

    predicate:string;
    reverse:boolean;

    constructor(private bookmarksService:BookmarksService) {
        this.predicate = 'creationDate';
        this.reverse = true;
    }

    addBookmark = () => {
        this.bookmarksService.add();
    };

    removeBookmark = (index:number) => this.bookmarksService.remove(index);

    get bookmarks() {
        return this.bookmarksService.bookmarks;
    }
}

angular
    .module('projectsApp')
    .controller('mainController', MainController);
