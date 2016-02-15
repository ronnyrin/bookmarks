/**
 * Created by ronnyr on 14/02/2016.
 */
angular
    .module('projectsApp')
    .controller('mainController', function () {
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

        this.addBookmark = function () {
            this.bookmarks.push(
                {
                    'id': 4,
                    'title': 'bookmark4',
                    'creationDate': '1455202600'
                }
            );
        };

        this.removeBookmark = function (index) {
            this.bookmarks.splice(index, 1);
        };
    });
