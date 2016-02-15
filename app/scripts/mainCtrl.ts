/**
 * Created by ronnyr on 14/02/2016.
 */

class Bookmark {
    id:number;
    title:string;
    creationDate:any;
}

class MainController {
    bookmarks:Bookmark[];

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

    addBookmark = () => {
        this.bookmarks.push(
            {
                'id': 4,
                'title': 'bookmark4',
                'creationDate': '1455978791608'
            }
        );
    };

    removeBookmark = (index:number) => this.bookmarks.splice(index, 1);
}

angular
    .module('projectsApp')
    .controller('mainController', MainController);
