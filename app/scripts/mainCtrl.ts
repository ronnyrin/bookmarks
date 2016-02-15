/**
 * Created by ronnyr on 14/02/2016.
 */

class Bookmark {
    id:number;
    title:string;
    creationDate:any;

    constructor() {

    }
}

class MainController {
    bookmarks:Bookmark[];

    constructor() {
        this.bookmarks = [
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
    }

    addBookmark = () => {
        this.bookmarks.push(
            {
                'id': 4,
                'title': 'bookmark4',
                'creationDate': '1455202600'
            }
        );
    };

    removeBookmark = (index:number) => this.bookmarks.splice(index, 1);
}

angular
    .module('projectsApp')
    .controller('mainController', MainController);
