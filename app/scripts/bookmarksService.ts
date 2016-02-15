/**
 * Created by ronnyr on 15/02/2016.
 */

interface IBookmark {
    id:number;
    title:string;
    creationDate:any;
}

class BookmarksService {
    bookmarks:IBookmark[];

    constructor() {
        this.bookmarks = [
            {
                'id': 1,
                'title': 'bookmark1',
                'creationDate': '1455540591608'
            },
            {
                'id': 2,
                'title': 'bookmark2',
                'creationDate': '1125540511608'
            },
            {
                'id': 3,
                'title': 'bookmark3',
                'creationDate': '1452510591608'
            }
        ];
    }

    add(bookmark) {
        this.bookmarks.push(bookmark);
    };

    remove(index:number) {
        this.bookmarks.splice(index, 1);
    }
}

angular
    .module('projectsApp')
    .service('bookmarksService', BookmarksService);
