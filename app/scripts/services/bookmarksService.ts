/**
 * Created by ronnyr on 15/02/2016.
 */

declare var Firebase:any;

interface IBookmark {
    title:string;
    creationDate:any;
}

class BookmarksService {
    bookmarks;
    ref;
    promise;

    constructor(private $http, private $firebaseArray) {
        this.bookmarks = [];
        this.ref = new Firebase("https://kick-bookmarks.firebaseio.com/bookmarks");
    }

    create(title):IBookmark {
        return {
            'title': title,
            'creationDate': Date.now()
        }
    }

    add(bookmark) {
        this.bookmarks.$add(bookmark);
    };

    edit(bookmark) {
        this.bookmarks.$save(bookmark);
    }

    findById(id) {
        for (var i = 0; i < this.bookmarks.length; i++) {
            if (this.bookmarks[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    loadBookmarks() {

        if (!this.promise) {
            this.promise = this.$firebaseArray(this.ref).$loaded().then(response => {
                this.bookmarks = response;
                return this.bookmarks;
            });
        }
        return this.promise;

        // http
        //return this.$http.get('data/bookmarks.json').then(response => {
        //    this.bookmarks = response.data;
        //    return response.data;
        //});
    }

    remove(bookmark) {
        this.bookmarks.$remove(bookmark);
    }
}

angular
    .module('projectsApp')
    .service('bookmarksService', BookmarksService);
