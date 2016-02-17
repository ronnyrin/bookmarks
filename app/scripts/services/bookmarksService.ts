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

    constructor(private $q) {
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
        var deferred = this.$q.defer();

        setTimeout(function () {
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
                    'id': 4,
                    'title': 'bookmark3',
                    'creationDate': '1452510591608'
                }
            ];
            deferred.resolve(this.bookmarks);
        }.bind(this), 1000);

        return deferred.promise;
    }

    remove(id:number) {
        var index = this.findById(id);
        this.bookmarks.splice(index, 1);
    }
}

angular
    .module('projectsApp')
    .service('bookmarksService', BookmarksService);
