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

    constructor(private $q, private $http) {
        this.bookmarks = [];

    }

    create(title):IBookmark {
        return {
            'id': 4,
            'title': title,
            'creationDate': Date.now()
        }
    }

    add(bookmark) {
        this.bookmarks.push(bookmark);
    };

    findById(id) {
        for (var i = 0; i < this.bookmarks.length; i++) {
            if (this.bookmarks[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    loadBookmarks() {
        return this.$http.get('data/bookmarks.json').then(response => {
            this.bookmarks = response.data;
            return response.data;
        });
    }

    remove(id:number) {
        var index = this.findById(id);
        this.bookmarks.splice(index, 1);
    }
}

angular
    .module('projectsApp')
    .service('bookmarksService', BookmarksService);
